/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/offres              ->  index
 * POST    /api/offres              ->  create
 * GET     /api/offres/:id          ->  show
 * PUT     /api/offres/:id          ->  update
 * DELETE  /api/offres/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Offre from './offre.model';
import fs from 'fs';
import Announce from '../announce/announce.model';
import User from '../user/user.model';
import nodemailer from 'nodemailer';
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://ziedboudhib%40gmail.com:stellax2@smtp.gmail.com');


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Offres
export function index(req, res) {
  return Offre.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Offre from the DB
export function show(req, res) {
  return Offre.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Offre in the DB
export function create(req, res) {
  var file = req.files.file;
  var art = req.body.offre;
  var offre = new Offre(art);
  //offre.user = req.user;

  fs.readFile(file.path, function (err,original_data) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }
    // save image in db as base64 encoded - this limits the image size
    // to there should be size checks here and in client
    var base64Image = original_data.toString('base64');
    fs.unlink(file.path, function (err) {
      if (err)
      {
        console.log('failed to delete ' + file.path);
      }
      else{
        console.log('successfully deleted ' + file.path);
      }
    });
    offre.image = base64Image;
    offre.save(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else
      {
        res.json(offre);
      }
    });
  });
  /*
  return Offre.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
    */
}

// Updates an existing Offre in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Offre.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Offre from the DB
export function destroy(req, res) {
  return Offre.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}


export function mail(req, res, next){

    var data = req.body;
    console.log(req.body);
    // setup e-mail data with unicode symbols
    var mailOptions = {
    from: '"Badel : " <ziedboudhib@gmail.com>', // sender address
    to: data.offre.anounceUseremail, // list of receivers
    subject: 'Notification Badel', // Subject line
    html: 'lutilisateur : ' + data.offre.username + ' vient de proposer une offre veuillez consulter votre annonce.' // html body
    };

   // send mail with defined transport object
   transporter.sendMail(mailOptions, function(error, info){
     if(error){
       return console.log(error);
     }
     console.log('Message sent: ' + info.response);
     next();
   });
 }

export function Updateannonce(req, res)
{
  var query = {_id: req.params.id};
  return Offre.findOne(query, function(err,doc){
    if(err)
    {
      handleError(res);
    }
    console.log(doc);
    Announce.findOne({_id: doc.announce}, function(err,ann){
      if(err)
      {
        handleError(res);
      }
      ann.offer = doc._id;
      ann.status = 'négociation terminée';
      ann.save();
    });
    res.end();
  });
}

export function attribution(req, res, next)
{
  var data = req.body;
  return User.findOne({_id: data.user._id}, function(err,user){
    if(err)
    {
      handleError(res);
    }
    user.point +=  10;
    user.reputation += 100;
    user.save();
    next();
  });

}

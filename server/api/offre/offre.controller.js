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
  return Offre.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
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

   // setup e-mail data with unicode symbols
    var mailOptions = {
    from: '"Badel : " <ziedboudhib@gmail.com>', // sender address
    to: data.anounceUser.email, // list of receivers
    subject: 'Notification Badel', // Subject line
    html: 'lutilisateur : ' + data.user.name + ' vient de proposer une offre veuillez consulter votre annonce.' // html body
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

/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/announces              ->  index
 * POST    /api/announces              ->  create
 * GET     /api/announces/:id          ->  show
 * PUT     /api/announces/:id          ->  update
 * DELETE  /api/announces/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Announce from './announce.model';
import User from '../user/user.model';

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

// Gets a list of Announces
export function index(req, res) {
  return Announce.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Announce from the DB
export function show(req, res) {
  return Announce.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Announce in the DB
export function create(req, res) {
  return Announce.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Announce in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Announce.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Announce from the DB
export function destroy(req, res) {
  return Announce.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

//Gets a list of Announces by user
export function showByUser(req, res) {
  return Announce.find().where('user._id').equals(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}



//Gets a list of Announces by title
export function showByTitle(req, res) {
  return Announce.find().where('title').equals(req.params.title).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
//Gets a list of Announces by underCategory
export function showByUnderCategory(req, res) {
  return Announce.find().where('underCategory').equals(req.params.underCategory).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
export function premium(req, res)
{
  return Announce.find().where('premium').equals('true').exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function findAndUpdate(req, res)
{
  var query = {_id: req.params.id};
  return Announce.findOne(query, function(err,doc){
    if(err)
    {
      handleError(res);
    }
    User.findOne({_id: doc.user[0]._id}, function(err, user){
      if(err)
      {
        handleError(res);
      }
      user.point -= 50;
      user.reputation += 50;
      user.save();
    });
    doc.premium = true;
    doc.datePost = new Date();
    doc.save();
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
    console.log(user);
    user.point +=  10;
    user.reputation += 10;
    user.save();
    next();
  });

}



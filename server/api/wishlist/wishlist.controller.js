/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/wishlists              ->  index
 * POST    /api/wishlists              ->  create
 * GET     /api/wishlists/:id          ->  show
 * PUT     /api/wishlists/:id          ->  update
 * DELETE  /api/wishlists/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import fs from 'fs';
import Wishlist from './wishlist.model';

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

// Gets a list of Wishlists
export function index(req, res) {
  return Wishlist.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Wishlist from the DB
export function show(req, res) {
  return Wishlist.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets my Wishlist from the DB
export function showByUser(req, res) {
  return Wishlist.find().where('user_id').equals(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Gets my Wishlist from the DB
export function showByUserAnnonce(req, res) {
  return Wishlist.find().where('user_id').equals(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Creates a new Wishlist in the DB
export function create(req, res) {
  var file = req.files.file;
  console.log(file.name);
  console.log(file.type);
  console.log(file.path);
  console.log(req.body.wishlist);
  var art = req.body.wishlist;
  var wishlist = new Wishlist(art);
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
    wishlist.image = base64Image;
    wishlist.save(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else
      {
        res.json(wishlist);
      }
    });
  });
  /*
  return Wishlist.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
    */
}

// Updates an existing Wishlist in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Wishlist.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Wishlist from the DB
export function destroy(req, res) {
  return Wishlist.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}


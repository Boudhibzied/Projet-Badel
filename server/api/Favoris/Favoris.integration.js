'use strict';

var app = require('../..');
import request from 'supertest';

var newFavoris;

describe('Favoris API:', function() {

  describe('GET /api/Favoriss', function() {
    var Favoriss;

    beforeEach(function(done) {
      request(app)
        .get('/api/Favoriss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Favoriss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      Favoriss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/Favoriss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/Favoriss')
        .send({
          name: 'New Favoris',
          info: 'This is the brand new Favoris!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newFavoris = res.body;
          done();
        });
    });

    it('should respond with the newly created Favoris', function() {
      newFavoris.name.should.equal('New Favoris');
      newFavoris.info.should.equal('This is the brand new Favoris!!!');
    });

  });

  describe('GET /api/Favoriss/:id', function() {
    var Favoris;

    beforeEach(function(done) {
      request(app)
        .get('/api/Favoriss/' + newFavoris._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Favoris = res.body;
          done();
        });
    });

    afterEach(function() {
      Favoris = {};
    });

    it('should respond with the requested Favoris', function() {
      Favoris.name.should.equal('New Favoris');
      Favoris.info.should.equal('This is the brand new Favoris!!!');
    });

  });

  describe('PUT /api/Favoriss/:id', function() {
    var updatedFavoris;

    beforeEach(function(done) {
      request(app)
        .put('/api/Favoriss/' + newFavoris._id)
        .send({
          name: 'Updated Favoris',
          info: 'This is the updated Favoris!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedFavoris = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFavoris = {};
    });

    it('should respond with the updated Favoris', function() {
      updatedFavoris.name.should.equal('Updated Favoris');
      updatedFavoris.info.should.equal('This is the updated Favoris!!!');
    });

  });

  describe('DELETE /api/Favoriss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/Favoriss/' + newFavoris._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when Favoris does not exist', function(done) {
      request(app)
        .delete('/api/Favoriss/' + newFavoris._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});

'use strict';

var app = require('../..');
import request from 'supertest';

var newRecherche;

describe('Recherche API:', function() {

  describe('GET /api/Recherches', function() {
    var Recherches;

    beforeEach(function(done) {
      request(app)
        .get('/api/Recherches')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Recherches = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      Recherches.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/Recherches', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/Recherches')
        .send({
          name: 'New Recherche',
          info: 'This is the brand new Recherche!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRecherche = res.body;
          done();
        });
    });

    it('should respond with the newly created Recherche', function() {
      newRecherche.name.should.equal('New Recherche');
      newRecherche.info.should.equal('This is the brand new Recherche!!!');
    });

  });

  describe('GET /api/Recherches/:id', function() {
    var Recherche;

    beforeEach(function(done) {
      request(app)
        .get('/api/Recherches/' + newRecherche._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Recherche = res.body;
          done();
        });
    });

    afterEach(function() {
      Recherche = {};
    });

    it('should respond with the requested Recherche', function() {
      Recherche.name.should.equal('New Recherche');
      Recherche.info.should.equal('This is the brand new Recherche!!!');
    });

  });

  describe('PUT /api/Recherches/:id', function() {
    var updatedRecherche;

    beforeEach(function(done) {
      request(app)
        .put('/api/Recherches/' + newRecherche._id)
        .send({
          name: 'Updated Recherche',
          info: 'This is the updated Recherche!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRecherche = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRecherche = {};
    });

    it('should respond with the updated Recherche', function() {
      updatedRecherche.name.should.equal('Updated Recherche');
      updatedRecherche.info.should.equal('This is the updated Recherche!!!');
    });

  });

  describe('DELETE /api/Recherches/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/Recherches/' + newRecherche._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when Recherche does not exist', function(done) {
      request(app)
        .delete('/api/Recherches/' + newRecherche._id)
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

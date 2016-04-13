'use strict';

var app = require('../..');
import request from 'supertest';

var newOffre;

describe('Offre API:', function() {

  describe('GET /api/offres', function() {
    var offres;

    beforeEach(function(done) {
      request(app)
        .get('/api/offres')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          offres = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      offres.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/offres', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/offres')
        .send({
          name: 'New Offre',
          info: 'This is the brand new offre!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOffre = res.body;
          done();
        });
    });

    it('should respond with the newly created offre', function() {
      newOffre.name.should.equal('New Offre');
      newOffre.info.should.equal('This is the brand new offre!!!');
    });

  });

  describe('GET /api/offres/:id', function() {
    var offre;

    beforeEach(function(done) {
      request(app)
        .get('/api/offres/' + newOffre._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          offre = res.body;
          done();
        });
    });

    afterEach(function() {
      offre = {};
    });

    it('should respond with the requested offre', function() {
      offre.name.should.equal('New Offre');
      offre.info.should.equal('This is the brand new offre!!!');
    });

  });

  describe('PUT /api/offres/:id', function() {
    var updatedOffre;

    beforeEach(function(done) {
      request(app)
        .put('/api/offres/' + newOffre._id)
        .send({
          name: 'Updated Offre',
          info: 'This is the updated offre!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOffre = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOffre = {};
    });

    it('should respond with the updated offre', function() {
      updatedOffre.name.should.equal('Updated Offre');
      updatedOffre.info.should.equal('This is the updated offre!!!');
    });

  });

  describe('DELETE /api/offres/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/offres/' + newOffre._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when offre does not exist', function(done) {
      request(app)
        .delete('/api/offres/' + newOffre._id)
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

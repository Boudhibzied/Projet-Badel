'use strict';

var app = require('../..');
import request from 'supertest';

var newAnnounce;

describe('Announce API:', function() {

  describe('GET /api/announces', function() {
    var announces;

    beforeEach(function(done) {
      request(app)
        .get('/api/announces')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          announces = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      announces.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/announces', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/announces')
        .send({
          name: 'New Announce',
          info: 'This is the brand new announce!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAnnounce = res.body;
          done();
        });
    });

    it('should respond with the newly created announce', function() {
      newAnnounce.name.should.equal('New Announce');
      newAnnounce.info.should.equal('This is the brand new announce!!!');
    });

  });

  describe('GET /api/announces/:id', function() {
    var announce;

    beforeEach(function(done) {
      request(app)
        .get('/api/announces/' + newAnnounce._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          announce = res.body;
          done();
        });
    });

    afterEach(function() {
      announce = {};
    });

    it('should respond with the requested announce', function() {
      announce.name.should.equal('New Announce');
      announce.info.should.equal('This is the brand new announce!!!');
    });

  });

  describe('PUT /api/announces/:id', function() {
    var updatedAnnounce;

    beforeEach(function(done) {
      request(app)
        .put('/api/announces/' + newAnnounce._id)
        .send({
          name: 'Updated Announce',
          info: 'This is the updated announce!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAnnounce = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAnnounce = {};
    });

    it('should respond with the updated announce', function() {
      updatedAnnounce.name.should.equal('Updated Announce');
      updatedAnnounce.info.should.equal('This is the updated announce!!!');
    });

  });

  describe('DELETE /api/announces/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/announces/' + newAnnounce._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when announce does not exist', function(done) {
      request(app)
        .delete('/api/announces/' + newAnnounce._id)
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

'use strict';

var app = require('../..');
import request from 'supertest';

var newScrappe;

describe('Scrappe API:', function() {

  describe('GET /api/scrappes', function() {
    var scrappes;

    beforeEach(function(done) {
      request(app)
        .get('/api/scrappes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          scrappes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      scrappes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/scrappes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/scrappes')
        .send({
          name: 'New Scrappe',
          info: 'This is the brand new scrappe!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newScrappe = res.body;
          done();
        });
    });

    it('should respond with the newly created scrappe', function() {
      newScrappe.name.should.equal('New Scrappe');
      newScrappe.info.should.equal('This is the brand new scrappe!!!');
    });

  });

  describe('GET /api/scrappes/:id', function() {
    var scrappe;

    beforeEach(function(done) {
      request(app)
        .get('/api/scrappes/' + newScrappe._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          scrappe = res.body;
          done();
        });
    });

    afterEach(function() {
      scrappe = {};
    });

    it('should respond with the requested scrappe', function() {
      scrappe.name.should.equal('New Scrappe');
      scrappe.info.should.equal('This is the brand new scrappe!!!');
    });

  });

  describe('PUT /api/scrappes/:id', function() {
    var updatedScrappe;

    beforeEach(function(done) {
      request(app)
        .put('/api/scrappes/' + newScrappe._id)
        .send({
          name: 'Updated Scrappe',
          info: 'This is the updated scrappe!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedScrappe = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedScrappe = {};
    });

    it('should respond with the updated scrappe', function() {
      updatedScrappe.name.should.equal('Updated Scrappe');
      updatedScrappe.info.should.equal('This is the updated scrappe!!!');
    });

  });

  describe('DELETE /api/scrappes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/scrappes/' + newScrappe._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when scrappe does not exist', function(done) {
      request(app)
        .delete('/api/scrappes/' + newScrappe._id)
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

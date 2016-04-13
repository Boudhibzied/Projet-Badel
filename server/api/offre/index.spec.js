'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var offreCtrlStub = {
  index: 'offreCtrl.index',
  show: 'offreCtrl.show',
  create: 'offreCtrl.create',
  update: 'offreCtrl.update',
  destroy: 'offreCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var offreIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './offre.controller': offreCtrlStub
});

describe('Offre API Router:', function() {

  it('should return an express router instance', function() {
    offreIndex.should.equal(routerStub);
  });

  describe('GET /api/offres', function() {

    it('should route to offre.controller.index', function() {
      routerStub.get
        .withArgs('/', 'offreCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/offres/:id', function() {

    it('should route to offre.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'offreCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/offres', function() {

    it('should route to offre.controller.create', function() {
      routerStub.post
        .withArgs('/', 'offreCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/offres/:id', function() {

    it('should route to offre.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'offreCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/offres/:id', function() {

    it('should route to offre.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'offreCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/offres/:id', function() {

    it('should route to offre.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'offreCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

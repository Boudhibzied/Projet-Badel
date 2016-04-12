'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var RechercheCtrlStub = {
  index: 'RechercheCtrl.index',
  show: 'RechercheCtrl.show',
  create: 'RechercheCtrl.create',
  update: 'RechercheCtrl.update',
  destroy: 'RechercheCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var RechercheIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './Recherche.controller': RechercheCtrlStub
});

describe('Recherche API Router:', function() {

  it('should return an express router instance', function() {
    RechercheIndex.should.equal(routerStub);
  });

  describe('GET /api/Recherches', function() {

    it('should route to Recherche.controller.index', function() {
      routerStub.get
        .withArgs('/', 'RechercheCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/Recherches/:id', function() {

    it('should route to Recherche.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'RechercheCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/Recherches', function() {

    it('should route to Recherche.controller.create', function() {
      routerStub.post
        .withArgs('/', 'RechercheCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/Recherches/:id', function() {

    it('should route to Recherche.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'RechercheCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/Recherches/:id', function() {

    it('should route to Recherche.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'RechercheCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/Recherches/:id', function() {

    it('should route to Recherche.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'RechercheCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

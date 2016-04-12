'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var FavorisCtrlStub = {
  index: 'FavorisCtrl.index',
  show: 'FavorisCtrl.show',
  create: 'FavorisCtrl.create',
  update: 'FavorisCtrl.update',
  destroy: 'FavorisCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var FavorisIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './Favoris.controller': FavorisCtrlStub
});

describe('Favoris API Router:', function() {

  it('should return an express router instance', function() {
    FavorisIndex.should.equal(routerStub);
  });

  describe('GET /api/Favoriss', function() {

    it('should route to Favoris.controller.index', function() {
      routerStub.get
        .withArgs('/', 'FavorisCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/Favoriss/:id', function() {

    it('should route to Favoris.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'FavorisCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/Favoriss', function() {

    it('should route to Favoris.controller.create', function() {
      routerStub.post
        .withArgs('/', 'FavorisCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/Favoriss/:id', function() {

    it('should route to Favoris.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'FavorisCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/Favoriss/:id', function() {

    it('should route to Favoris.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'FavorisCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/Favoriss/:id', function() {

    it('should route to Favoris.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'FavorisCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

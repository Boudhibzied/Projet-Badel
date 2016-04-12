'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var announceCtrlStub = {
  index: 'announceCtrl.index',
  show: 'announceCtrl.show',
  create: 'announceCtrl.create',
  update: 'announceCtrl.update',
  destroy: 'announceCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var announceIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './announce.controller': announceCtrlStub
});

describe('Announce API Router:', function() {

  it('should return an express router instance', function() {
    announceIndex.should.equal(routerStub);
  });

  describe('GET /api/announces', function() {

    it('should route to announce.controller.index', function() {
      routerStub.get
        .withArgs('/', 'announceCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/announces/:id', function() {

    it('should route to announce.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'announceCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/announces', function() {

    it('should route to announce.controller.create', function() {
      routerStub.post
        .withArgs('/', 'announceCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/announces/:id', function() {

    it('should route to announce.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'announceCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/announces/:id', function() {

    it('should route to announce.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'announceCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/announces/:id', function() {

    it('should route to announce.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'announceCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

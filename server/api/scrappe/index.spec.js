'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var scrappeCtrlStub = {
  index: 'scrappeCtrl.index',
  show: 'scrappeCtrl.show',
  create: 'scrappeCtrl.create',
  update: 'scrappeCtrl.update',
  destroy: 'scrappeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var scrappeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './scrappe.controller': scrappeCtrlStub
});

describe('Scrappe API Router:', function() {

  it('should return an express router instance', function() {
    scrappeIndex.should.equal(routerStub);
  });

  describe('GET /api/scrappes', function() {

    it('should route to scrappe.controller.index', function() {
      routerStub.get
        .withArgs('/', 'scrappeCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/scrappes/:id', function() {

    it('should route to scrappe.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'scrappeCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/scrappes', function() {

    it('should route to scrappe.controller.create', function() {
      routerStub.post
        .withArgs('/', 'scrappeCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/scrappes/:id', function() {

    it('should route to scrappe.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'scrappeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/scrappes/:id', function() {

    it('should route to scrappe.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'scrappeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/scrappes/:id', function() {

    it('should route to scrappe.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'scrappeCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

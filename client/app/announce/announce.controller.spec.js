'use strict';

describe('Component: AnnounceComponent', function () {

  // load the controller's module
  beforeEach(module('projetBadelApp'));

  var AnnounceComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AnnounceComponent = $componentController('AnnounceComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

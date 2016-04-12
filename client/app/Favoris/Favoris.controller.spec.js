'use strict';

describe('Component: FavorisComponent', function () {

  // load the controller's module
  beforeEach(module('projetBadelApp'));

  var FavorisComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    FavorisComponent = $componentController('FavorisComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

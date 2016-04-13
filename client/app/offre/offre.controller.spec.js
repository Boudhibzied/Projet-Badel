'use strict';

describe('Component: OffreComponent', function () {

  // load the controller's module
  beforeEach(module('projetBadelApp'));

  var OffreComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    OffreComponent = $componentController('OffreComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

'use strict';

describe('Component: WishlistComponent', function () {

  // load the controller's module
  beforeEach(module('projetBadelApp'));

  var WishlistComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    WishlistComponent = $componentController('WishlistComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

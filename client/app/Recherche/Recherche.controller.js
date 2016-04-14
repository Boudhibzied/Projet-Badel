'use strict';

angular.module('projetBadelApp')
  .controller('RechercheCtrl', function ($scope,$state,$stateParams,$window,Scrappe) {

    $scope.scrappes = Scrappe.get();
  });

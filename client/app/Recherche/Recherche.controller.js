'use strict';

angular.module('projetBadelApp')
  .controller('RechercheCtrl', function ($scope,$state,$stateParams,$window,Scrappe) {
    $scope.scrappe = Scrappe.get({name:$stateParams.name});
  });

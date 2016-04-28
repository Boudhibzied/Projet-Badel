'use strict';

angular.module('projetBadelApp')
  .controller('RechercheCtrl', function ($scope,$state,$stateParams,$window,Scrappe,$timeout) {

    $timeout(function(){
      $scope.scrappes = Scrappe.get();
    },3000);
  });


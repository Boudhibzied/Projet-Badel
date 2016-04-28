
'use strict';

angular.module('projetBadelApp')
  .controller('announcePremiumController',function($scope,$state,$window,premium){

    $scope.premiums =premium.getPremium();

  });


'use strict';

angular.module('projetBadelApp')
  .controller('announcePremiumController',function($scope,$state,$window,premium){

    $scope.premiums =premium.getPremium();

  })
  .controller('PremiumEditController',function($scope,$state,$stateParams,premium){

    $scope.updatePremium=function(){
      $scope.announce.putpremium({id:announce._id}, function(){
        $state.go('favoris');
      });
    };

  });


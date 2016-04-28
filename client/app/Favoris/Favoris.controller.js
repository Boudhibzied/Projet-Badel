
'use strict';

angular.module('projetBadelApp')
  .controller('announcePremiumController',function($scope,$state,$window,premium){

    $scope.premiums =premium.getPremium();

  })
  .controller('PremiumEditController',function($scope,$state,premium){


    $scope.updatePremium=function(){
      var data = this.announce._id;
      console.log(data);
      premium.putpremium({id: data}, function(){
        $state.reload();

      });
    };

  });


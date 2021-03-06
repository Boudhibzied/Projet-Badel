'use strict';
angular.module('projetBadelApp')

  .controller('commentListController',function($scope,$state,$window,Comment){

    $scope.comments=Comment.query();
    $scope.deletecomment=function(comment){
      comment.$delete(function(){
        $state.reload();
      });
    };

  })

  .controller('commentCreateController',function($scope,$state,$stateParams,$window,Comment){
    $scope.comments=new Comment();

    $scope.addcomment=function(){
      $scope.comments.$save(function(){
        $window.location.reload();
      });
    };

  })
  .controller('commentEditController',function($scope,$state,$stateParams,Comment, $window){

    $scope.updatecomment=function(){
      $scope.comment.$update(function(){
        $window.location.href='';
      });
    };

    $scope.loadcomment=function(){
      $scope.comments=comment.get({id:$stateParams.id});
    };

    $scope.loadcomment();
  });

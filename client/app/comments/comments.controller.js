angular.module('projetBadelApp')

  .controller('commentListController',function($scope,$state,$window,comment){

    $scope.comments=comment.query();
    $scope.deletecomment=function(comment){
      comment.$delete(function(){
        $window.location.href='';
      });
    }

  })

  .controller('commentCreateController',function($scope,$state,$stateParams,$window,comment){
    $scope.comments=new comment();

    $scope.addcomment=function(){
      $scope.comments.$save(function(){
        $window.location.href='Announces';
      });
    }

  })
  .controller('commentEditController',function($scope,$state,$stateParams,comment){

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

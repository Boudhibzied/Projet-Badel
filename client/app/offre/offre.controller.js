angular.module('projetBadelApp')

  .controller('OffreListController',function($scope,$state,$window,Offre){

    $scope.Offres=Offre.query();

    $scope.Offre=function(Offre){
      Offre.$delete(function(){
        $window.location.href='';
      });
    }

  })
  .controller('AnnounceViewController',function($scope,$stateParams,Announce){

    $scope.announce=Announce.get({id:$stateParams.id});

  })
  .controller('AnnounceCreateController',function($scope,$state,$stateParams,Announce){
    $scope.announce=new Announce();

    $scope.addAnnounce=function(){
      $scope.announce.$save(function(){
        $state.go('Announces');
      });
    }

  })
  .controller('AnnounceEditController',function($scope,$state,$stateParams,Announce){

    $scope.updateAnnounce=function(){
      $scope.announce.$update(function(){
        $state.go('Announces');
      });
    };

    $scope.loadAnnounce=function(){
      $scope.announce=Announce.get({id:$stateParams.id});
    };

    $scope.loadAnnounce();
  });

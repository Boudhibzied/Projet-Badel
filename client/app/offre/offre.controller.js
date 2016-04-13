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
  .controller('OffreCreateController',function($scope,$state,$stateParams,Offre){
    $scope.offre=new Offre();

    $scope.addOffre=function(){
      $scope.offre.$save(function(){
        $state.go('Offres');
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

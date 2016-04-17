angular.module('projetBadelApp')

  .controller('AnnounceListController',function($scope,$state,$window,Announce){

    $scope.Announces=Announce.query();

    $scope.deleteAnnounce=function(Announce){
      Announce.$delete(function(){
        $window.location.href='Announces';
      });
    }

  })

  .controller('AnnounceShowController',function($scope,$state,$window,$stateParams,Annonce){



    $scope.Announces=Annonce.getByID({id:$stateParams.id});

    $scope.deleteAnnounce=function(Annonce){
      Annonce.$delete(function(){
        $window.location.href='showAnnounce';
      });
    }

  })




  .controller('AnnounceViewController',function($scope,$stateParams,Announce){

    $scope.testt="LALALALA";
    $scope.offre=Offre.query();
    $scope.announce=Announce.get({id:$stateParams._id});



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

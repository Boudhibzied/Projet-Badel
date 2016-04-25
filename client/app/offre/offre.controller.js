angular.module('projetBadelApp')

  .controller('OffreListController',function($scope,$state,$window,Offre){

    $scope.Offres=Offre.query();

    $scope.deleteOffre=function(Offre){
      Offre.$delete(function(){
        $window.location.href='Offres';
      });
    }

  })
  .controller('OffreCreateController',function($scope,$state,$stateParams,Offre){
    $scope.offre=new Offre();

    $scope.addOffre=function(){
      $scope.offre.$save(function(){
        $state.go('offre');
      });
    }


  })

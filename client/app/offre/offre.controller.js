angular.module('projetBadelApp')

  .controller('OffreListController',function($scope,$state,$window,Offre){

    $scope.Offres=Offre.query();

    $scope.deleteOffre=function(Offre){
      Offre.$delete(function(){
        $state.reload();
      });
    };
    $scope.UpdateAnnonce = function (o){
      var data = this.o._id;
      Offre.putAnnonce({id: data}, function(){
        $state.reload();
      });
    };
  })
  .controller('OffreCreateController',function($scope,$state,$stateParams,Offre){
    $scope.offre=new Offre();

    $scope.addOffre=function(){
      $scope.offre.$save(function(){
        $state.reload();
      });
    }


  })

/**
 * Created by faten on 11/04/2016.
 */
angular.module('projetBadelApp')

  .controller('SupplierListController',function($scope,$state,$window,Supplier){

    $scope.Suppliers=Supplier.query();

    $scope.deleteSupplier=function(Supplier){
      Supplier.$delete(function(){
        $window.location.href='';
      });
    }

  })
  .controller('SupplierViewController',function($scope,$stateParams,Supplier){

    $scope.supplier=Supplier.get({id:$stateParams.id});

  })
  .controller('SupplierCreateController',function($scope,$state,$stateParams,Supplier){

    $scope.supplier=new Supplier();

    $scope.addSupplier=function(){
      $scope.supplier.$save(function(){
        $state.go('Suppliers');
      });
    }

  })
  .controller('SupplierEditController',function($scope,$state,$stateParams,Supplier){

    $scope.updateSupplier=function(){
      $scope.supplier.$update(function(){
        $state.go('Suppliers');
      });
    };

    $scope.loadSupplier=function(){
      $scope.supplier=Supplier.get({id:$stateParams.id});
    };

    $scope.loadSupplier();
  });

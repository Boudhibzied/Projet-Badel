
'use strict';

angular.module('projetBadelApp')



  .controller('WishlistCreateController',function($scope,$state,$stateParams,Wishlist){

    $scope.wishlist=new Wishlist();

    $scope.addWishlist=function(){
      $scope.wishlist.$save(function(){
        $state.go('Wishlists');
      });
    };

  })

  .controller('WishlistShowController',function($scope,$state,$window,$stateParams,Wish){

    $scope.Wishlists=Wish.getByID({id:$stateParams.id});

    $scope.deleteWishlist=function(Wish){
      Wish.$delete(function(){
        $state.reload();
      });
    };




  })
  .controller('WishlistListController',function($scope,$state,$window,Wishlist){

    $scope.Wishlists=Wishlist.query();

  })

  .controller('WishlistShowUserController',function($scope,$state,$window,$stateParams,Wis){

    $scope.Wishlists=Wis.getByIDD({id:$stateParams.id});

  })




  .controller('WishlistEditController',function($scope,$state,$stateParams,Wishlist){

    $scope.updateWishlist=function(){
      $scope.wishlist.$update(function(){
        $state.go('Wishlists');
      });
    };

    $scope.loadWishlist=function(){
      $scope.wishlist=Wishlist.get({id:$stateParams.id});
    };

    $scope.loadWishlist();
  });

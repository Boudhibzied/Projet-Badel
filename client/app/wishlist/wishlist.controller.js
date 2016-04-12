/**
 * Created by faten on 11/04/2016.
 */
angular.module('projetBadelApp')

  .controller('WishlistListController',function($scope,$state,$window,Wishlist){

    $scope.Wishlists=Wishlist.query();

    $scope.deleteWishlist=function(Wishlist){
      Wishlist.$delete(function(){
        $window.location.href='Wishlists';
      });
    }

  })
  .controller('WishlistViewController',function($scope,$stateParams,Wishlist){

    $scope.wishlist=Wishlist.get({_id:$stateParams.id});

  })
  .controller('WishlistCreateController',function($scope,$state,$stateParams,Wishlist){

    $scope.wishlist=new Wishlist();

    $scope.addWishlist=function(){
      $scope.wishlist.$save(function(){
        $state.go('Wishlists');
      });
    }

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

angular.module('projetBadelApp').config(function($stateProvider,$httpProvider){
  $stateProvider.state('Wishlists',{
    url:'/Wishlists/:id',
    templateUrl:'app/wishlist/wishlist.html',
    controller:'WishlistShowController'
  }).state('newWishlist',{
    url:'/nouveau',
    templateUrl:'app/wishlist/wishlist-add.html',
    controller:'WishlistCreateController'
  }).state('editWishlist',{
    url:'/Wishlists/:id',
    templateUrl:'app/wishlist/wishlist-edit.html',
    controller:'WishlistEditController'
  });
});



'use strict';
angular.module('projetBadelApp').config(function($stateProvider,$httpProvider){
  $stateProvider.state('Wishlists',{
    url:'/Wishlists',
    templateUrl:'app/wishlist/wishlist.html',
    controller:'WishlistListController'
  }).state('viewWishlist',{
    url:'/Wishlists/:id/view',
    templateUrl:'app/wishlist/wishlist-view.html',
    controller:'WishlistViewController'
  }).state('newWishlist',{
    url:'/Wishlists/new',
    templateUrl:'app/wishlist/wishlist-add.html',
    controller:'WishlistCreateController'
  }).state('editWishlist',{
    url:'/Wishlists/:id/edit',
    templateUrl:'app/wishlist/wishlist-edit.html',
    controller:'WishlistEditController'
  });
});



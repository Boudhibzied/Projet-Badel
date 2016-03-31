'use strict';

angular.module('projetBadelApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('compte', {
        url: '/compte',
        templateUrl: 'app/compte/compte.html',
      })
      .state('favoris', {
        url: '/favoris',
        templateUrl: 'app/compte/Favoris.html',
      })
      .state('Wishlist', {
        url: '/Wishlist',
        templateUrl: 'app/compte/Wishlist.html',
      });
  });

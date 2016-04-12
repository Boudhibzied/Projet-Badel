angular.module('projetBadelApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('favoris', {
        url: '/favoris',
        templateUrl: 'app/Favoris/Favoris.html',
      });


  });

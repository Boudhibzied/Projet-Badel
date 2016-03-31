'use strict';

angular.module('projetBadelApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('Annonce', {
        url: '/Annonce',
        templateUrl: 'app/Annonces/Annonces.html',
      });
  });

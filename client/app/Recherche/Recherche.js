'use strict';

angular.module('projetBadelApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('recherche', {
        url: '/recherche',
        templateUrl: 'app/Recherche/recherche.html',
      });
  });

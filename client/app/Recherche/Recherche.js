'use strict';

angular.module('projetBadelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Recherche', {
        url: '/Recherche',
        templateUrl: 'app/Recherche/Recherche.html',
        controller: 'RechercheCtrl'
      });
  });

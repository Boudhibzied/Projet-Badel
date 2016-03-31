'use strict';

angular.module('projetBadelApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('Negociation', {
        url: '/Negociation',
        templateUrl: 'app/Negociation/negociation.html',
      });
  });

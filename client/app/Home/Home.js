'use strict';

angular.module('projetBadelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: 'app/home/home.html',
      });
  });

'use strict';

angular.module('projetBadelApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('About', {
        url: '/About',
        templateUrl: 'app/AboutUs/About.html',
      });
  });


'use strict';

angular.module('projetBadelApp', [
  'projetBadelApp.auth',
  'projetBadelApp.admin',
  'projetBadelApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'textAngular',
  'ngMaterial',
  'ngMessages',
  'ngFileUpload'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });




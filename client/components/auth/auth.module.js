'use strict';

angular.module('projetBadelApp.auth', [
  'projetBadelApp.constants',
  'projetBadelApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

'use strict';

angular.module('projetBadelApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
      });
  });

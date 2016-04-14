'use strict';

angular.module('projetBadelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('comments', {
        url: '/comments',
        templateUrl: 'app/comments/comments.html',
        controller: 'CommentsCtrl'
      });
  });

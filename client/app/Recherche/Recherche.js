'use strict';

angular.module('projetBadelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Recherche', {
        url: '/Recherche',
        templateUrl: 'app/Recherche/Recherche.html',
        controller: 'RechercheCtrl'
      }).state('Category',{
      url:'/Menu/:underCategory',
      templateUrl:'app/Recherche/CategVetement.html'
    }).state('Vertical',{
      url:'/RechercheVertical',
      templateUrl:'app/Recherche/Recherche.html'
    }).state('Horizontal',{
      url:'/RechercheHorizontal',
      templateUrl:'app/Recherche/RechercheHorizontal.html'
    });
  });

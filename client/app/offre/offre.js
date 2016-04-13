'use strict';

angular.module('projetBadelApp')
  .config(function ($stateProvider) {
    $stateProvider.state('offre',{
        url:'/Offres',
        templateUrl:'app/offre/offre.html',
        controller:'OffreListController'
      }
      );
  });

'use strict';
angular.module('projetBadelApp').config(function($stateProvider,$httpProvider){
  $stateProvider.state('Announces',{
    url:'/Announces',
    templateUrl:'app/Recherche/Recherche.html',
    controller:'AnnounceListController'
  }).state('viewAnnounce',{
    url:'/Announces/:id',
    templateUrl:'app/announce/Annonces.html',
    controller:'AnnounceViewController'
  }).state('showAnnounce',{
    url:'/MesAnnounces/:id',
    templateUrl:'app/Favoris/Favoris.html',
    controller:'AnnounceShowController'
  }).state('newAnnounce',{
    url:'/Announces/new',
    templateUrl:'app/announce/ajoutAnnonce.html',
    controller:'AnnounceCreateController'
  }).state('editAnnounce',{
    url:'/Announces/:id/edit',
    templateUrl:'app/announce/editAnnounce.html',
    controller:'AnnounceEditController'
  });
});



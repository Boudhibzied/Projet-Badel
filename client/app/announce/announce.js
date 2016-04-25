'use strict';
angular.module('projetBadelApp').config(function($stateProvider,$httpProvider){
  $stateProvider.state('AnnouncesR',{
    url:'/Recherche/:title',
    templateUrl:'app/Recherche/Recherche.html',
    controller:'AnnounceListRechercheController'
  }).state('newAnnounce',{
    url:'/Announces/new',
    templateUrl:'app/announce/ajoutAnnonce.html',
    controller:'AnnounceCreateController'
  }).state('viewAnnounce',{
    url:'/Announcess/:id',
    templateUrl:'app/announce/Annonces.html',
    controller:'AnnounceViewController'
  }).state('showAnnounce',{
    url:'/showAnnounce/:id',
    templateUrl:'app/Favoris/Favoris.html',
    controller:'AnnounceShowController'
  }).state('editAnnounce',{
    url:'/Announces/:id/edit',
    templateUrl:'app/announce/editAnnounce.html',
    controller:'AnnounceEditController'
  });
});



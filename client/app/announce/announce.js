'use strict';
angular.module('projetBadelApp').config(function($stateProvider){
  $stateProvider.state('AnnouncesR',{
    url:'/Recherche/:title',
    templateUrl:'app/Recherche/Recherche.html',
    controller:'AnnounceListRechercheController'
  }).state('viewAnnounce',{
    url:'/Announcess/:id/:name',
    templateUrl:'app/announce/Annonces.html',
    controller:'AnnounceViewController'
  }).state('showAnnounce',{
    url:'/showAnnounce/:id',
    templateUrl:'app/Favoris/Favoris.html',
    controller:'AnnounceShowController'

  }).state('newAnnounce',{
    url:'/newAnnounces',
    templateUrl:'app/announce/ajoutAnnonce.html',
    controller:'AnnounceCreateController'
  }).state('editAnnounce',{
    url:'/Announces/:id/edit',
    templateUrl:'app/announce/editAnnounce.html',
    controller:'AnnounceEditController'
  });
});

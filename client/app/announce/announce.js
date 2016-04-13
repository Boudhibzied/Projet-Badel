'use strict';
angular.module('projetBadelApp').config(function($stateProvider,$httpProvider){
  $stateProvider.state('Announces',{
    url:'/Announces',
    templateUrl:'app/announce/announce.html',
    controller:'AnnounceListController'
  }).state('viewAnnounce',{
    url:'/Announces/:id/view',
    templateUrl:'app/announce/Annonces.html',
    controller:'AnnounceViewController'
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



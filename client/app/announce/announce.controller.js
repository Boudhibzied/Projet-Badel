'use strict';

angular.module('projetBadelApp')

  .controller('AnnounceListController',function($scope,$state,$window,Announce){

    $scope.Announces=Announce.query();

  })
  .controller('AnnounceShowController',function($scope,$state,$window,$stateParams,Annonce){

    $scope.Announces=Annonce.getByID({id:$stateParams.id});

    $scope.deleteAnnounce=function(Annonce){
      Annonce.$delete(function(){
        $state.reload();
      });
    };

  })
  .controller('AnnounceViewController',function($scope, $stateParams, Announce, Scrappe){

    $scope.announce=Announce.get({id:$stateParams.id});
    $scope.scrappe=Scrappe.addscrappe({name:$stateParams.name});


  })
  .controller('scrappeController',function($scope, $stateParams, Scrappe){

    $scope.scrappe=Scrappe.addscrappe({name: $stateParams.name});

  })
  .controller('AnnounceCreateController',function($scope,$state,$stateParams,Announce){
    $scope.announce=new Announce();


    $scope.addAnnounce=function(){
      $scope.announce.$save(function(){
        $state.go('Recherche');
      });
    };
  })
  .controller('AnnounceEditController',function($scope,$state,$stateParams,Announce){

    $scope.updateAnnounce=function(){
      $scope.announce.$update(function(){
        $state.go('Announces');
      });
    };

    $scope.loadAnnounce=function(){
      $scope.announce=Announce.get({id:$stateParams.id});
    };

    $scope.loadAnnounce();
  })
  .controller('repeatController', function($scope) {
    $scope.categories=[{
        title: 'objets personnels',
        underCategory:[
          { name: 'vetement'},
          { name: 'chaussures'},
          { name: 'Sacs et accessoires'},
          { name: "Montres et bijoux"}
        ]},
        {
          title: "beauté et santé",
          underCategory:[
            { name: "produits cosmétiques"},
            { name: "Équipement medical"}
          ]},
        {
          title: "Maison",
          underCategory:[
            { name: "Intérieur"},
            { name: "Electroménager"},
          ]},
        {
          title: "Loisirs",
          underCategory:[
            { name: "films , livres et magazines"},
            { name: "Instruments musicales"},
            { name: "animaux domestiques"}
          ]},
        {
          title: "Multimedia",
          underCategory:[
            { name: "Téléphonie"},
            { name: "jeux videos et console"},
            { name: "informatique et accessoires"}
          ]},
      {
        title: "véhicules",
        underCategory:[
          { name: "Motos"},
          { name: "Vélos"},
          { name: "Voitures"},
          { name: "Pièces de rechange et accessoires"}
        ]},
      {
        title: "Autres",
        underCategory:[
          { name: "Autres Produits"}
        ]},

   ]


    $scope.selectedCategory = $scope.categories[0];

  });





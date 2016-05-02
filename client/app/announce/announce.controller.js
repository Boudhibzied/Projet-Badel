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
  .controller('AnnounceCreateController',function($scope,$state,$stateParams, $timeout, Upload, $location){
    $scope.fileReaderSupported = window.FileReader !== null;

    // Create new Article
    $scope.create = function(picFile, announce) {
      console.log('create');
      console.log(picFile);
      console.log(announce);

      Upload.upload({
        url: '/api/announces/',
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        fields: {announce: announce},
        file: picFile
      }).success(function (response, status) {
        console.log(response);
        $state.go('showAnnounce', {id: announce.user._id});
      }).error(function (err) {
        $scope.error = err.data.message;
      });

    };

    $scope.doTimeout = function(file) {
      console.log('do timeout');
      $timeout( function() {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        console.log('read');
        fileReader.onload = function(e) {
          $timeout(function() {
            file.dataUrl = e.target.result;
            console.log('set url');
          });
        };
      });
    };


    $scope.generateThumb = function(file) {
      console.log('generate Thumb');
      if (file) {
        console.log('not null');
        console.log(file);
        if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
          $scope.doTimeout(file);
        }
      }
    };



    /*

    // Create new ANNOUNCE
    $scope.create = function(picFile, announce) {
      console.log('create');
      console.log(picFile);
      console.log(announce);
      Upload.upload({
        url: '/api/announces/',
        data: {file: picFile, 'announce': announce},
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'}
      }).success(function (response, status) {
        $location.path('showAnnounce/' + response.announce._id);
      }).error(function (err) {
        $scope.error = err.data.message;
      });

    };
*/


    /*
    $scope.announce=new Announce();
    $scope.addAnnounce=function(){
      $scope.announce.$save(function(){
        $state.go('showAnnounce', {id: announce.user._id});
      });
    };
    */

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
  });

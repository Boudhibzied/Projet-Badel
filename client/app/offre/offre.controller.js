'use strict';

angular.module('projetBadelApp')

  .controller('OffreListController',function($scope,$state,$window,Offre){

    $scope.Offres=Offre.query();

    $scope.deleteOffre=function(Offre){
      Offre.$delete(function(){
        $state.reload();
      });
    };
    $scope.UpdateAnnonce = function (){
      var data = this.o._id;
      Offre.putAnnonce({id: data}, function(){
        $state.reload();
      });
    };
  })
  .controller('OffreCreateController',function($scope, $state, $stateParams, Upload, $timeout, $location){

    $scope.fileReaderSupported = window.FileReader !== null;

    // Create new Offre
    $scope.create = function(picFile, offre) {
      console.log('create');
      console.log(picFile);
      console.log(offre);

      Upload.upload({
        url: '/api/offres/',
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        fields: {offre: offre},
        file: picFile
      }).success(function (response, status) {
        console.log(response);
        $state.go('viewAnnounce', {id: offre.announce});
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
    $scope.offre=new Offre();

    $scope.addOffre=function(){
      $scope.offre.$save(function(){
        $state.reload();
      });
    };
*/

  });

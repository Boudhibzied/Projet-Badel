
'use strict';

angular.module('projetBadelApp')



  .controller('WishlistCreateController',function($scope,$state,$stateParams,Wishlist, $timeout, Upload){
    $scope.fileReaderSupported = window.FileReader !== null;

    // Create new wishlist
    $scope.create = function(picFile, wishlist) {
      console.log('create');
      console.log(picFile);
      console.log(wishlist);

      Upload.upload({
        url: '/api/wishlists/',
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        fields: {wishlist: wishlist},
        file: picFile
      }).success(function (response, status) {
        console.log(response);
        $state.go('Wishlists', {id: wishlist.user_id});
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
        $scope.wishlist=new Wishlist();

        $scope.addWishlist=function(){
          $scope.wishlist.$save(function(){
            $state.go('Wishlists');
          });
        };
    */
  })

  .controller('WishlistShowController',function($scope,$state,$window,$stateParams,Wish){

    $scope.Wishlists=Wish.getByID({id:$stateParams.id});

    $scope.deleteWishlist=function(Wish){
      Wish.$delete(function(){
        $state.reload();
      });
    };
  })
  .controller('WishlistListController',function($scope,$state,$window,Wishlist){

    $scope.Wishlists=Wishlist.query();

  })

  .controller('WishlistShowUserController',function($scope,$state,$window,$stateParams,Wis){

    $scope.Wishlists=Wis.getByIDD({id:$stateParams.id});

  })




  .controller('WishlistEditController',function($scope,$state,$stateParams,Wishlist){

    $scope.updateWishlist=function(){
      $scope.wishlist.$update(function(){
        $state.go('Wishlists');
      });
    };

    $scope.loadWishlist=function(){
      $scope.wishlist=Wishlist.get({id:$stateParams.id});
    };

    $scope.loadWishlist();
  });

'use strict';
angular.module('projetBadelApp').config(function($stateProvider,$httpProvider){
  $stateProvider.state('Suppliers',{
    url:'/Suppliers',
    templateUrl:'app/wishlist/wishlist.html',
    controller:'SupplierListController'
  }).state('viewSupplier',{
    url:'/Suppliers/:id/view',
    templateUrl:'app/wishlist/wishlist-view.html',
    controller:'SupplierViewController'
  }).state('newSupplier',{
    url:'/Suppliers/new',
    templateUrl:'app/wishlist/wishlist-add.html',
    controller:'SupplierCreateController'
  }).state('editSupplier',{
    url:'/Suppliers/:id/edit',
    templateUrl:'app/wishlist/wishlist-edit.html',
    controller:'SupplierEditController'
  });
});



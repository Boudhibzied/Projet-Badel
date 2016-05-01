'use strict';

angular.module('projetBadelApp')
  .factory('Announce',function($resource){
    return $resource('/api/announces/:id',{},
      {
        'get':   {method:'GET', params: { id: '@_id'}},
        'save':   {method:'POST'},
        'query':  {method:'GET', isArray:true},
        'remove': {method:'DELETE', params: { id: '@_id'}},
        'delete': {method:'DELETE', params: { id: '@_id'}},
        'update': {method: 'PUT'}},
      {
        stripTrailingSlashes: false
      });
  })
  .factory('Annonce',function($resource){
    return $resource('/api/announces/show/:id',{},
      {  'getByID':  {method:'GET', params: { id: '@_id'}, isArray:true },
        'delete': {method:'DELETE', params: { id: '@_id'}},
      },
      {
        stripTrailingSlashes: false
      });
  })
  .factory('Recherche',function($resource){
    return $resource('/api/announces/title/:title',{},
      {  'getByTitle':  {method:'GET', params: { title: '@title'}, isArray:true },
      },
      {
        stripTrailingSlashes: false
      });
  });

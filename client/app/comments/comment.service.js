'use strict';
angular.module('projetBadelApp')
  .factory('Comment',function($resource){
    return $resource('http://localhost:9000/api/commentss/:id',{},
      { 'get':   {method:'GET', params: { id: '@_id'}},
        'save':   {method:'POST'},
        'query':  {method:'GET', isArray:true},
        'remove': {method:'DELETE', params: { id: '@_id'}},
        'delete': {method:'DELETE', params: { id: '@_id'}},
        'update': {method: 'PUT'}},
      {
        stripTrailingSlashes: false
      });
  });

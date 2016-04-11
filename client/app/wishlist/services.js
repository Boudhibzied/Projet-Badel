/**
 * Created by faten on 11/04/2016.
 */
angular.module('projetBadelApp')
.factory('Supplier',function($resource){
  return $resource('http://localhost:9000/api/wishlists/:id',{},
    {  'get':    {method:'GET', params: { id: '@id'}},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'remove': {method:'DELETE', params: { id: '@id'}},
      'delete': {method:'DELETE', params: { id: '@id'}},
      'update': {method: 'PUT'}},
    {
      stripTrailingSlashes: false
    });
});

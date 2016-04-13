/**
 * Created by faten on 11/04/2016.
 */
angular.module('projetBadelApp')
.factory('Wishlist',function($resource){
  return $resource('http://localhost:9000/api/wishlists/:id',{},
    {  'get':    {method:'GET', params: { id: '@_id'}},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'remove': {method:'DELETE', params: { id: '@_id'}},
      'delete': {method:'DELETE', params: { id: '@_id'}},
      'update': {method: 'PUT'}},
    {
      stripTrailingSlashes: false
    });
})
  .factory('Wish',function($resource){
    return $resource('http://localhost:9000/api/wishlists/show/:id',{},
      {  'getByID':  {method:'GET', params: { id: '@_id'}, isArray:true },
        'delete': {method:'DELETE', params: { id: '@_id'}},
      },
      {
        stripTrailingSlashes: false
      });
  });

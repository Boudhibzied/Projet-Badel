/**
 * Created by faten on 08/04/2016.
 */
angular.module('projetBadelApp')
.factory('Supplier',function($resource){
  return $resource('http://localhost:18080/EasyERP-web/rest/supp/:id/:dest',{},
    {  'get':    {method:'GET', params: { id: '@id', dest:"find"}},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'remove': {method:'DELETE', params: { id: '@id', dest:"deleteSupplier"}},
      'delete': {method:'DELETE', params: { id: '@id', dest:"deleteSupplier"}},
      'update': {method: 'PUT'}},
    {
      stripTrailingSlashes: false
    });
});

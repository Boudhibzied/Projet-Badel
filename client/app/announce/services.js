angular.module('projetBadelApp')
  .factory('Announce',function($resource){
    return $resource('http://localhost:9000/api/announces/:id',{},
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
  .factory('Offre',function($resource){
  return $resource('http://localhost:9000/api/offres/:id',{},
    {  'get':    {method:'GET', params: { id: '@_id'}},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'remove': {method:'DELETE', params: { id: '@_id'}},
      'delete': {method:'DELETE', params: { id: '@_id'}},
      'update': {method: 'PUT'}},
    {
      stripTrailingSlashes: false
    });
});

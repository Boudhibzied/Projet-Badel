angular.module('projetBadelApp')
  .factory('Announce',function($resource){
    return $resource('http://localhost:9000/api/announces/:id',{},
      {  'get':   {method:'GET', params: { id: '@_id'}},
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
  return $resource('http://localhost:9000/api/announces/show/:id',{},
    {  'getByID':  {method:'GET', params: { id: '@_id'}, isArray:true },
       'delete': {method:'DELETE', params: { id: '@_id'}},
      },
    {
      stripTrailingSlashes: false
    });
})
  .factory('Recherche',function($resource){
    return $resource('http://localhost:9000/api/announces/title/:title',{},
      {  'getByTitle':  {method:'GET', params: { title: '@title'}, isArray:true },
      },
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

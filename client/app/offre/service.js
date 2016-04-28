'use strict';

angular.module('projetBadelApp')
  .factory('Offre',function($resource){
    return $resource('http://localhost:9000/api/offres/:id/:dest',{},
      {  'get':    {method:'GET', params: { id: '@_id'}},
        'save':   {method:'POST'},
        'query':  {method:'GET', isArray:true},
        'remove': {method:'DELETE', params: { id: '@_id'}},
        'delete': {method:'DELETE', params: { id: '@_id'}},
        'update': {method: 'PUT'},
        'putAnnonce': {methode: 'GET', params:{dest: 'Updateannonce',id: '@_id' }}
      },
      {
        stripTrailingSlashes: false
      });
  });

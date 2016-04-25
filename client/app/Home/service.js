angular.module('projetBadelApp')
  .factory('premium',function($resource){
    return $resource('http://localhost:9000/api/announces/:dest/:id',{},
      {
        'getPremium':  {method:'GET', isArray:true, params:{ dest: 'premium'}},
        'putpremium': {methode: 'GET', params:{ dest: 'premiumUpdate', id: '@_id' }}
      },
      {
        stripTrailingSlashes: false
      });
  });

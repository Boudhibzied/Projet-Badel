angular.module('projetBadelApp')
  .factory('premium',function($resource){
    return $resource('http://localhost:9000/api/announces/:dest',{},
      {
        'getPremium':  {method:'GET', isArray:true, params:{ dest: 'premium' }},
        'putpremium': {methode: 'PUT', params:{ dest: 'premiumUpdate' }}
      },
      {
        stripTrailingSlashes: false
      });
  });

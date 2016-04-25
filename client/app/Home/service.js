angular.module('projetBadelApp')
  .factory('premium',function($resource){
    return $resource('http://localhost:9000/api/announces/premium',{},
      {
        'getPremium':  {method:'GET', isArray:true}
      },
      {
        stripTrailingSlashes: false
      });
  });

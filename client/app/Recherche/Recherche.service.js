angular.module('projetBadelApp')
  .factory('Scrappe',function($resource){
    return $resource('http://localhost:9000/api/scrappes/:name',{},
      {  'get':    {method:'GET', params: { name: '@name'}}},
      {
        stripTrailingSlashes: false
      });
  });

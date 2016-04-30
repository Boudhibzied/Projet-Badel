'use strict';

angular.module('projetBadelApp')
  .factory('Scrappe',function($resource){
    return $resource('/api/scrappes/:name',{},
      {
        'get':    {method:'GET', isArray:true},
        'addscrappe':    {method:'POST', params: {name:'@name'}}
      },

      {
        stripTrailingSlashes: false
      });
  })
  .factory('page',function($resource){
    return $resource('http://localhost:9000/api/announces/underCategory/:underCategory',{},
      {  'get':  {method:'GET', params:{underCategory: '@underCategory'}, isArray:true },

      },
      {
        stripTrailingSlashes: false
      });
  });



'use strict';

angular.module('projetBadelApp', [
  'projetBadelApp.auth',
  'projetBadelApp.admin',
  'projetBadelApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .factory("user",[
  "$cookies", function($cookies) {
    var userid = "";
    return {
      setCookieData: function(id) {
        userid = id;
        $cookies.put("userid", id);
      },
      getCookieData: function() {
        userid = $cookies.get("userid");
        return userid;
      }
    }
  }
]);


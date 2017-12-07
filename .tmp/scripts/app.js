'use strict';

/**
 * @ngdoc overview
 * @name myPortfolioApp
 * @description
 * # myPortfolioApp
 *
 * Main module of the application.
 */

angular.module('myPortfolioApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  }).otherwise({
    redirectTo: '/'
  });
});
//# sourceMappingURL=app.js.map
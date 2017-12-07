'use strict';

/**
 * @ngdoc function
 * @name myPortfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myPortfolioApp
 */
angular.module('myPortfolioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

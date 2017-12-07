'use strict';

/**
 * @ngdoc function
 * @name myPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myPortfolioApp
 */
angular.module('myPortfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'myApp.controllers',
  'myApp.services'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('./client/category', {
      templateUrl: 'vcategory',
      controller: 'CatCtrl'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});

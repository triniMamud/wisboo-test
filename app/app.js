'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.buscarImagenes',
  'myApp.misImagenes',
  'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/buscarImagenes' });
  }]);



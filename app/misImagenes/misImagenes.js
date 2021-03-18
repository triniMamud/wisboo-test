'use strict';

angular.module('myApp.misImagenes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/misImagenes', {
    templateUrl: 'misImagenes/misImagenes.html',
    controller: 'MisImagenesController'
  });
}])

.controller('MisImagenesController', [function() {

}]);
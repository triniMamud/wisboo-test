

angular.module('myApp', [
  'ngRoute',
  'myApp.buscarImagenes',
  'myApp.misImagenes',
  'myApp.version'
])
  .controller('AppController', ['$rootScope', function ($rootScope) {
    $rootScope.imagenesGuardadas = [];
    $rootScope.imagesList = [];
  }])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when("/",
        {
          redirectTo: '/buscarImagenes'
        })
      .when("/buscarImagenes", {
        templateUrl: 'buscarImagenes/buscarImagenes.html',
        controller: 'BuscarImagenesController'
      })
      .when("/misImagenes", {
        templateUrl: 'misImagenes/misImagenes.html',
        controller: 'MisImagenesController'
      });
  }]);



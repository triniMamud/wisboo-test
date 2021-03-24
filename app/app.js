

angular.module('myApp', [
  'ngRoute',
  'myApp.buscarImagenes',
  'myApp.misImagenes',
  'myApp.version'
])
  .controller('AppController', ['$rootScope', function ($rootScope) {
    $rootScope.imagenesGuardadas = [];
    $rootScope.imagesList = [];
    $rootScope.loadIndex = 5;
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

      var env = {};

      // Import variables if present (from env.js)
      if (window) {
        Object.assign(env, window.__env);
      }
      
      // Define AngularJS application
      var ngModule = angular.module('myApp', []);
      
      // Register environment in AngularJS as constant
      ngModule.constant('__env', env);
  }]);


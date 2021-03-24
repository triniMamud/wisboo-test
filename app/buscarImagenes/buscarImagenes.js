
angular.module('myApp.buscarImagenes', [])


  .controller('BuscarImagenesController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.setBusqueda = async function (__env) {
      let busqueda = document.getElementById("busqueda").value;
      let response = await fetch(window.__env.apiUrl + '?query=' + busqueda + '&client_id=' + window.__env.apiKey);
      let jsonResponse = await response.json();
      $rootScope.imagesList = await jsonResponse.results;
      $rootScope.loadIndex = 5;
    }

    $scope.setBusqueda.$inject = ['__env'];  

    $scope.guardar = function (imagen) {
      if ($rootScope.imagenesGuardadas.indexOf(imagen.urls.thumb) == -1) {
        window.localStorage.setItem(imagen.id, imagen.urls.thumb);
        imagen.liked_by_user = true;
      }
    }

    $scope.cargarMas = function() {
      if ($scope.loadIndex < $rootScope.imagesList.length) {
        $rootScope.loadIndex += 5;
      }
    };
  }
]);


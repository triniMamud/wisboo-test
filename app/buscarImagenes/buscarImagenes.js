
angular.module('myApp.buscarImagenes', [])


  .controller('BuscarImagenesController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    const accesKey = 'A_hUHjtgyir3Z8Tz6buW6tkPEAoC6iR_3SVFPPsrM9s';
    const endPoint = 'https://api.unsplash.com/search/photos';
    
    $scope.setBusqueda = async function (){
      let busqueda = await document.getElementById("busqueda").value;
      let response =  await fetch(endPoint + '?query=' + busqueda + '&client_id=' + accesKey);
      let jsonResponse = await response.json();
      $rootScope.imagesList = await jsonResponse.results;
    }

    $scope.guardar = function (imagen) {
      if ($rootScope.imagenesGuardadas.indexOf(imagen.urls.thumb) == -1){
        $rootScope.imagenesGuardadas.push(imagen.urls.thumb);
        imagen.liked_by_user = true;
      }
    }
  }]);
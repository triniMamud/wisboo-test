'use strict';



angular.module('myApp.buscarImagenes', ['ngRoute'])


  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/buscarImagenes', {
      templateUrl: 'buscarImagenes/buscarImagenes.html',
      controller: 'BuscarImagenesController'
    });
  }])

  .controller('BuscarImagenesController', [function ($scope) {

    const accesKey = 'A_hUHjtgyir3Z8Tz6buW6tkPEAoC6iR_3SVFPPsrM9s';
    const endPoint = 'https://api.unsplash.com/search/photos';
    let primerBusqueda = true;

    async function setBusqueda(){
      let busqueda = await document.getElementById("busqueda").value;
      await alert(busqueda)
      let response = await (await fetch(endPoint + '?query=' + busqueda + '&client_id=' + accesKey));
      let jsonResponse = await response.json();
      let imagesList = await jsonResponse.results

      if (!primerBusqueda) {
        console.log('entra');
        document.body.removeChild(document.getElementById('imageContainer'));
      } else {
        primerBusqueda = false;
      }

      console.log(primerBusqueda);
      let imageContainer = document.createElement("div");
      imageContainer.id = "imageContainer"
      document.body.appendChild(imageContainer);

      for (let i = 0; i < imagesList.length; i++) {
        const image = document.createElement('img');
        image.src = imagesList[i].urls.thumb;
        imageContainer.appendChild(image);
      }
      //let jsonResponse = await response.json();
      //let imagesList = await jsonResponse.results;



      //busqueda = document.getElementById('busqueda')
    }
    let formulario = document.getElementById("formulario");

      formulario.addEventListener('submit', setBusqueda);

    //createImages(setBusqueda());

    function getImages(query) {
     // let formulario = document.getElementById("formulario");

      //formulario.addEventListener('submit', createImages);
      /*

      //console.log(imagesList);
     createImages(imagesList);*/
    }

    function createImages(imagesList) {
      console.log("entra");
      for (let i = 0; i < imagesList.length; i++) {
        const image = document.createElement('img');
        image.src = imagesList[i].urls.thumb;
        console.log(image.src);
        document.body.appendChild(image);
      }

    }
 //   getImages(busqueda);


  }]);
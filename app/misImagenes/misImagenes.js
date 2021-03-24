
angular.module('myApp.misImagenes', ['ngRoute'])

    .controller('MisImagenesController', ['$rootScope', function ($rootScope) {
        for (let i = 0; i < window.localStorage.length; i++) {
            if ($rootScope.imagenesGuardadas.indexOf(window.localStorage.getItem(window.localStorage.key(i))) == -1) {
                $rootScope.imagenesGuardadas.push(window.localStorage.getItem(window.localStorage.key(i)));
            }
        }
    }
]);
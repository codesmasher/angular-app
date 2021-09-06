angular.module('app-routes', ['ngRoute'])
    .config([
        '$routeProvider',
        '$locationProvider',
        function($routeProvider, $locationProvider) {
            // TODO: Incluir las secciones del sistema original
            $routeProvider
                .when('/', {
                    controller: 'LoginController',
                    controllerAs: 'login',
                    templateUrl: 'app/views/commons/login.html'
                })
                .when('/not-found', {
                    templateUrl: 'app/views/commons/not-found.html'
                })
                .otherwise({
                    redirectTo: '/not-found'
                });
            // $locationProvider.html5Mode(true); // <- no habilitar hasta definir el back-end
        }
    ])
    .controller('LoginController', [
        '$scope',
        function($scope) {
            // TODO: Incluir todo el código para el inicio de sesión
        }
    ]);
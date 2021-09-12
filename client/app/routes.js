'use strict';

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
        .when('/logout', {
            controller: 'LogoutController',
            controllerAs: 'logout',
            template: ''
        })
        .when('/forgot-password', {
            controller: 'ForgotPasswordController',
            controllerAs: 'forgotPass',
            templateUrl: 'app/views/commons/forgot-password.html'
        })
        .when('/reset-password/:tempToken', {
            controller: 'ResetPasswordController',
            controllerAs: 'resetPass',
            templateUrl: 'app/views/commons/reset-password.html'
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
    '$location',
    function($location) {
        // TODO: Incluir todo el código para el inicio de sesión
        function submit() {
            if (!this.username) {
                console.log('No existe el nombre del usuario');
                return;
            }
            if (!this.password) {
                console.log('No existe la contraseña del usuario');
                return;
            }
            $location.path('/admin');
        }
        this.username = null;
        this.password = null;
        this.submit = submit;
    }
])
.controller('LogoutController', [
    '$location',
    function($location) {
        // TODO: Incluir todo el código para el cierre de sesión
        $location.path('/');
    }
])
.controller('ForgotPasswordController', [
    '$scope',
    function($scope) {
        // TODO: Incluir todo el código para solicitar cambio de contraseña
    }
])
.controller('ResetPasswordController', [
    '$location',
    '$routeParams',
    function($location, $routeParams) {
        // TODO: Incluir todo el código para cambiar la contraseña
        if ($routeParams.tempToken !== 'algo') {
            return $location.path('/not-found');
        }
    }
]);

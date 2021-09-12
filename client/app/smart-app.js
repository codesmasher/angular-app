'use strict';

angular.module('smartApp', [
    'app-routes',
    'admin'
])
.controller('MainController', [
    '$route',
    '$routeParams',
    '$location',
    function($route, $routeParams, $location) {

        this.$route = $route;
        this.$routeParams = $routeParams;
        this.$location = $location;
        console.log(this);
    }
]);

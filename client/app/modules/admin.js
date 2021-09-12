'use strict';

angular.module('admin', ['ngRoute'])
.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/admin', {
            templateUrl: 'app/views/admin/main-layout.html'
        });
    }
]);

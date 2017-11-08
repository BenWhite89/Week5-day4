angular.module('myBlogApp', ['ngRoute', 'ngResource', 'myBlogApp.controllers', 'myBlogApp.factories'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider: any, $locationProvider: any) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/blogposts.html',
                controller: 'BlogpostsController'
            })
            .when('/compose', {
                templateUrl: 'views/newpost.html',
                controller: 'ComposeController'
            })
            .when('/:id', {
                templateUrl: 'views/singleview.html',
                controller: 'SingleController'
            })
            .when('/:id/update', {
                templateUrl: 'views/updateview.html',
                controller: 'UpdateController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);
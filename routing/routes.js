angular.module("weather", ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/home',{
            templateUrl:'partials/home.html',
            controller:'mainController'
        })
        .when('/about',{
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        })
        .when('/contact',{
            templateUrl: 'partials/contact.html',
            controller: 'contactController'
        });
});
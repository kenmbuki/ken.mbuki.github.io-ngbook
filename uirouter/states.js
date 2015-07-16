app.config( function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise ('/daily');

    $stateProvider
    .state('hourly', {
        url: '/hourly',
        controller: 'WeatherController',
        templateUrl: 'partials/hourly.html'
    })
    .state('daily', {
        url:'/daily',
        controller:'WeatherController',
        templateUrl: 'partials/daily.html'
    })
});
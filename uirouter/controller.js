angular.module('weather', []);

.controller('WeatherController', function($scope, weatherService){
    $scope.hourForecasts = weatherService.getHourlyForecasts();
    $scope.dayForecasts = weatherService.getDailyForecasts();
});
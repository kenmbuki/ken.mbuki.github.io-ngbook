var app = angular.module('weather', ['ui.router']);

app.factory('weatherService', function () {
var svc = [];

    svc.getHourlyForecasts = function() {
    var forecasts = [];
    forecasts.push({ day: 'Monday', high: 75, low: 42});
    return forecasts;
    };

    svc.getDailyForecasts
    return svc;
});
// Code goes here

 angular.module('myApp', [])
 .controller('MyController', function($scope, $timeout, $interpolate){
   $scope.clock = {};
   $scope.$watch('emailBody', function(body){
     if (body){
      var template = $interpolate(body);
      $scope.previewText = template ({ to: $scope.to });
     }
   });
   var updateClock = function(){
     $scope.clock.now = new Date();
     $timeout(function () {
       updateClock();
     },1000);
   };
   updateClock();
 });
  

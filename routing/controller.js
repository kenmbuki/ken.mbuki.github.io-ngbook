angular.module("weather")
.controller("mainController", function($scope){
    $scope.message = 'Is Everyone  Happy now ?? We are Home now !!!';
})
.controller("aboutController", function($scope){
    $scope.message = 'Am just Becoming a guru !! Thats all about me.';
})
.controller("contactController", function($scope){
    $scope.message = 'Contact Me Buddy !!';
});
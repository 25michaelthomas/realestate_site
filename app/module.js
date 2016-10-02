var app = angular.module('realEstateApp', []);
app.directive("city", function () {
  return {
    restrict: 'E',
    templateUrl: "results.html"
  };
});

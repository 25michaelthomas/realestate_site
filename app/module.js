var app = angular.module('realEstateApp', []);
app.directive('city', function () {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'results.html'
  };
});

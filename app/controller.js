app.controller('MainController', ['$scope', "getResults", function ($scope, getResults) {



  window.setTimeout(function () {
    $scope.cities = results;
    $scope.$apply("cities", results);
  }, 200);

      }]);

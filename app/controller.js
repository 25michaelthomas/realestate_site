app.controller('MainController', ['$scope', "applyFilters", "getResults", function ($scope, applyFilters, getResults) {

  $scope.apply = applyFilters.initResults;
  $scope.apply();
  $scope.results = applyFilters.results;
  $scope.change = applyFilters.change;
}]);

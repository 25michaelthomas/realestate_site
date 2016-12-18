app.controller('MainController', ['$scope', "applyFilters", "getResults", "$rootScope", "liveSearch", function ($scope, applyFilters, getResults, $rootScope, liveSearch) {
  $scope.apply = applyFilters.initResults2;
  $scope.change = applyFilters.change;
  $scope.liveSearch = liveSearch.suggestions2;
  $scope.rotation = 0;
  $scope.results = applyFilters.results;
  $scope.rotate = applyFilters.rotate;
  $scope.city = liveSearch.thisCity;
  $scope.searchedCity = applyFilters.results.searchedCity;
  $scope.search = applyFilters.results.searchWords;
  $scope.pickCity = applyFilters.searchedCity;
}]);

app.controller('OtherController', ['$scope', "applyFilters", "getResults", "$rootScope", "liveSearch", function ($scope, applyFilters, getResults, $rootScope, liveSearch) {
  $scope.searchBarClick = applyFilters.search;
  $scope.liveSearch = liveSearch.suggestions2;
  $scope.search = applyFilters.results.searchWords;
  $scope.pickCity = applyFilters.searchedCity;
}]);

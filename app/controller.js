app.controller('MainController', ['$scope', "applyFilters", "getResults", "$rootScope", "liveSearch", function ($scope, applyFilters, getResults, $rootScope, liveSearch) {
  $scope.applyFilters = applyFilters;
  $scope.apply = applyFilters.initResults2;
  $scope.change = applyFilters.change;
  $scope.liveSearch = liveSearch.suggestions2;
  $scope.liveSearch2 = liveSearch.suggestions;
  $scope.rotation = 0;
  $scope.results = applyFilters.results;
  $scope.rotate = function () {
    var nav_button = $("#nav-button");
    var menu = $("#menu");
    if ($scope.rotation === 2) {
      nav_button.removeClass("rotate").addClass("reverse-rotate");
      menu.slideToggle();
      var i = nav_button.attr("class");
      $scope.rotation = 1;
    } else {
      nav_button.removeClass("reverse-rotate").addClass("rotate");
      $scope.rotation = 2;
      menu.slideToggle();
    }
  };
  $scope.city = liveSearch.thisCity;
  $scope.searchedCity = applyFilters.results.searchedCity;
  $scope.search = applyFilters.results.searchWords;
  $scope.pickCity = applyFilters.searchedCity;
  $scope.getNumber = function (num) {
    var number = parseFloat(num);
    return new Array(number);
  }
  $scope.$on('$routeChangeSuccess', function (event) {


    $scope.apply($scope.searchedCity.val);

  });
}]);

app.controller('OtherController', ['$scope', "applyFilters", "getResults", "$rootScope", "liveSearch", function ($scope, applyFilters, getResults, $rootScope, liveSearch) {
  $scope.apply = applyFilters.initResults2;
  $scope.searchBarClick = applyFilters.search;
  $scope.liveSearch = liveSearch.suggestions2;
  $scope.search = applyFilters.results.searchWords;
  $scope.pickCity = applyFilters.searchedCity;

}]);

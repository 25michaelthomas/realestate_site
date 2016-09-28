app.controller('MainController', ['$scope', "getResults", function ($scope, getResults) {
  getResults.success(function (data) {
    $scope.results = data;
  });
}]);

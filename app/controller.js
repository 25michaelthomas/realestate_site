app.controller('MainController', ['$scope', "getResults", function ($scope, getResults) {

  getResults.success(function (data) {
    $scope.cities = data;
  });
  $scope.gem = {
    name: "Ring",
    price: 2.9

  };
}]);

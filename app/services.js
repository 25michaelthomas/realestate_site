app.factory('getResults', ['$http', function ($http) {
  return $http.get('app.json')
    .success(function (data) {
      return data;

    })
    .error(function (err) {
      return err;
    });
}]);
app.factory('applyFilters', ['$http', function ($http) {
  return function (item) {


  };

}]);

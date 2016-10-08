app.factory('getResults', ['$http', function ($http) {
  return $http.get('app.json')
    .success(function (data) {
      return data;

    })
    .error(function (err) {
      return err;
    });
}]);

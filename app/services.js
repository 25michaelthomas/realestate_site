app.factory('getResults', ['$http', function ($http) {
  return $http.get('app.json')
    .success(function (data) {
      return data;

    })
    .error(function (err) {
      return err;
    });
}]);
app.factory('applyFilters', ['getResults', function (getResults) {

  var minPrice = 0;
  var maxPrice = 10000000000;
  var bathrooms = 0;
  var bedrooms = 0;
  var squareFeet = 0;
  var homeType = 0;
  var results = {
    homes: []
  };

  return {
    initResults: function () {
      getResults.success(function (data) {

        results.homes = [];
        map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: 45.397,
            lng: -70.644
          },
          zoom: 5
        });


        for (var i = 0; i < data.homes.length; i++) {
          var dataBeds = parseFloat(data.homes[i].beds);
          var dataBaths = parseFloat(data.homes[i].baths);
          var dataPrice = parseFloat(data.homes[i].price);
          var dataSqft = parseFloat(data.homes[i].sqft);
          var lat = data.homes[i].lat;
          var long = data.homes[i].long;
          var address = data.homes[i].address;
          var myLatLng = {
            lat: parseInt(data.homes[i].lat),
            lng: parseInt(data.homes[i].long)
          };


          if ((dataBaths >= bathrooms) && (dataBeds >= bedrooms) && (minPrice <= dataPrice) && (dataPrice <= maxPrice) && (dataSqft >= squareFeet)) {
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Hello World!'
            });
            results.homes.push(data.homes[i]);

          }
        }
      });
    },
    results: results

  }






}]);

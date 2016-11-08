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


  var results = {
    homes: [],
    minPrice: 0,
    maxPrice: 10000000000,
    bathrooms: 0,
    bedrooms: 0,
    squareFeet: 0,
    homeType: 0
  };

  return {
    change: function (key, val) {

      switch (key) {
        case "Min Price":
          if (val !== "Min Price") {

            results.minPrice = parseFloat(val);

          } else {
            results.minPrice = 0;
          }


          break;
        case "Max Price":
          if (val !== "Max Price") {

            results.maxPrice = parseFloat(val);

          } else {
            results.maxPrice = 10000000000;
          }
          break;
        case "Bathrooms":
          if (val !== "Bathrooms") {

            results.bathrooms = parseFloat(val);

          } else {
            results.bathrooms = 0;
          }

          break;
        case "Bedrooms":
          if (val !== "Bedrooms") {

            results.bedrooms = parseFloat(val);

          } else {
            results.bedrooms = 0;
          }
          break;
        case "Square feet":
          if (val !== "Square feet") {

            results.squareFeet = parseFloat(val);

          } else {
            results.squareFeet = 0;
          }
          break;
        case "Home type":
          if (val !== "Home type") {

            results.homeType = parseFloat(val);

          } else {
            results.homeType = 0;
          }
          break;
        default:
          alert("idk");
      }
    },
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


          if ((dataBaths >= results.bathrooms) && (dataBeds >= results.bedrooms) && (results.minPrice <= dataPrice) && (dataPrice <= results.maxPrice) && (dataSqft >= results.squareFeet)) {
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

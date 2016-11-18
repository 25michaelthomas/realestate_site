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
    type: 0
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

            results.type = val;

          } else {
            results.type = 0;
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
          (function () {

            var marker = [];
            var infowindow = [];
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
            var dataHomeType = data.homes[i].type;


            if ((dataBaths >= results.bathrooms) && (dataBeds >= results.bedrooms) && (results.minPrice <= dataPrice) && (dataPrice <= results.maxPrice) && (dataSqft >= results.squareFeet) && (results.type == 0 || dataHomeType == results.type)) {
              marker[i] = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: data.homes[i].address
              });
              results.homes.push(data.homes[i]);

              infowindow[i] = new google.maps.InfoWindow({
                content: '<div id="content">' +
                  '<div id="siteNotice">' +
                  '</div>' +
                  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' + data.homes[i].price +
                  '<div id="bodyContent">' + '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                  'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
                  '(last visited June 22, 2009).</p>' +
                  '</div>' +
                  '</div>',
                maxWidth: 100,
                position: myLatLng

              });
              var newWindow = infowindow[i];

              var modal = document.getElementById("#resultsModal");
              marker[i].addListener('mouseover', function () {

                newWindow.open(map, this);

              });
              marker[i].addListener('mouseout', function () {

                newWindow.close();
              });


            }
          }());
        }

      });
    },
    results: results

  }






}]);

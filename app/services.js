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
    type: 0,
    searchWords: "",
    searchedCity: {
      key: "No results found"
    }
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

    initResults2: function (homes) {
      results.homes = [];


      for (var i = 0; i < homes.length; i++) {
        (function () {
          if (i === 0) {
            var cityLat = 0;
            var cityLong = 0;
            for (var a = 0; a < homes.length; a++) {
              cityLat += parseInt(homes[a].lat);
              cityLong += parseInt(homes[a].long);
            }
            cityLat = cityLat / a;
            cityLong = cityLong / a;

            map = new google.maps.Map(document.getElementById('map'), {
              center: {
                lat: cityLat,
                lng: cityLong
              },
              zoom: 7
            });
          }

          var marker = [];
          var infowindow = [];
          var dataBeds = parseFloat(homes[i].beds);
          var dataBaths = parseFloat(homes[i].baths);
          var dataPrice = parseFloat(homes[i].price);
          var dataSqft = parseFloat(homes[i].sqft);
          var lat = homes[i].lat;
          var long = homes[i].long;
          var address = homes[i].address;
          var myLatLng = {
            lat: parseInt(homes[i].lat),
            lng: parseInt(homes[i].long)
          };
          var dataHomeType = homes[i].type;

          if ((dataBaths >= results.bathrooms) && (dataBeds >= results.bedrooms) && (results.minPrice <= dataPrice) && (dataPrice <= results.maxPrice) && (dataSqft >= results.squareFeet) && (results.type == 0 || dataHomeType == results.type)) {
            marker[i] = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: homes[i].address
            });
            results.homes.push(homes[i]);
            infowindow[i] = new google.maps.InfoWindow({
              content: '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' + homes[i].price +
                '<div id="bodyContent">' + '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
                '(last visited June 22, 2009).</p>' +
                '</div>' +
                '</div>',
              maxWidth: 100,
              position: myLatLng
            });
            var newWindow = infowindow[i];
            marker[i].addListener('mouseover', function () {
              newWindow.open(map, this);
            });
            marker[i].addListener('mouseout', function () {
              newWindow.close();
            });
            marker[i].addListener('click', function () {
              $("#resultsModal").modal("show");
            });

          }
        }());
      }
    },
    results: results,
    search: function () {
      results.searchWords = $("#search-bar").val();
    },
    searchedCity: function (x) {
      if (1) {
        results.searchedCity = x;
      }
    },
    rotate: function () {
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
    }
  }
}]);

app.factory('liveSearch', ['getResults', function (getResults) {
  var thisCity = {
    city: []
  };

  return {
    suggestions2: function () {
      var searchBar = $("#search-bar").val();
      var regex = new RegExp("^" + searchBar, "i");
      getResults.success(function (data) {
        thisCity.city = [];
        angular.forEach(data, function (val, key) {

          if (key.search(regex) != -1) {
            thisCity.city.push({
              key: key,
              val: val
            });
          }
        });
      });
    },
    thisCity: thisCity
  }

      }]);

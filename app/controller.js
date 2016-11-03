app.controller('MainController', ['$scope', "applyFilters", "getResults", function ($scope, applyFilters, getResults) {
  $scope.apply = applyFilters;
  $scope.minPrice = 0;
  $scope.maxPrice = 10000000000;
  $scope.bathrooms = 0;
  $scope.bedrooms = 0;
  $scope.squareFeet = 0;
  $scope.homeType = 0;


  $scope.initResults = function () {
    getResults.success(function (data) {

      $scope.results = [];
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


        if ((dataBaths >= $scope.bathrooms) && (dataBeds >= $scope.bedrooms) && ($scope.minPrice <= dataPrice) && (dataPrice <= $scope.maxPrice) && (dataSqft >= $scope.squareFeet)) {
          var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
          });
          $scope.results.push(data.homes[i]);

        }

      }
    });
  };
  $scope.initResults();







      }]);

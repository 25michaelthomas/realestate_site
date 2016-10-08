$(function () {
  var nav_button = $("#nav-button");
  var menu = $("#menu");

  nav_button.click(function () {
    menu.slideToggle();
    var i = nav_button.attr("class");

    if (i === "rotate") {
      nav_button.removeClass("rotate").addClass("reverse-rotate");
    } else {
      nav_button.removeClass("reverse-rotate").addClass("rotate");
    }
  });
  $.ajax({
    type: 'GET',
    url: 'app.json',
    dataType: 'json',
    success: function (data) {
      var minPrice = 0;
      var maxPrice = 10000000000;
      var bathrooms = 0;
      var bedrooms = 0;
      var squareFeet = 0;
      var homeType = 0;


      $(".custom-select").on("change", function (e) {
        var target = $(e.target);
        var targetValue = target.val();


        switch (target.attr("name")) {
          case "Min Price":
            if (targetValue !== "Min Price") {

              minPrice = parseFloat(targetValue);

            } else {
              minPrice = 0;
            }

            break;
          case "Max Price":
            if (targetValue !== "Max Price") {

              maxPrice = parseFloat(targetValue);

            } else {
              maxPrice = 1000000000;
            }

            break;
          case "Bathrooms":
            if (targetValue !== "Bathrooms") {

              bathrooms = parseFloat(targetValue);

            } else {
              bathrooms = 0;
            }

            break;
          case "Bedrooms":
            if (targetValue !== "Bedrooms") {

              bedrooms = parseFloat(targetValue);

            } else if (targetValue === "Bedrooms") {
              bedroom = 0;
            }
            break;
          case "Square feet":
            if (targetValue !== "Square feet") {

              squareFeet = parseFloat(targetValue);

            } else {
              squareFeet = 0;
            }

            break;
          case "Home type":
            if (targetValue !== "Home type") {

              homeType = parseFloat(targetValue);

            } else {
              homeType = 0;
            }

            break;
          default:
            alert("idk");
        }
        initMap();
      });


      function initMap() {

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
            results.push(data.homes[i]);

          }

        }

      }
      initMap();

    }
  });
});
var g = "gooppgle";
var results = [];

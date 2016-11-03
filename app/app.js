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
              bedrooms = 0;
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


      });





    }
  });
});
var init;
var g = "gooppgle";
var results = [];

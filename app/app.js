$(function () {
  var nav_button = $("#nav-button");
  var menu = $("#menu");

  nav_button.click(function () {
    menu.slideToggle();
    var i = nav_button.attr("class");

    if (i === "rotate") {
      nav_button.removeClass("rotate").addClass("reverse-rotate")
    } else {
      nav_button.removeClass("reverse-rotate").addClass("rotate")
    }
  });
});

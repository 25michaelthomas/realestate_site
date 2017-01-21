var app = angular.module('realEstateApp', ['ngRoute']);
app.directive("city", function () {
  return {
    restrict: 'E',
    templateUrl: "results.html"
  };
});



app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

    .when("/buy", {
      controller: 'MainController',
      templateUrl: "buy.html",
      css: 'stylesheets/screen.css'
    })
    .when("/sell", {
      controller: 'MainController',
      templateUrl: "sell.html",
      css: 'stylesheets/screen.css'
    })
    .when("/rent", {
      controller: 'MainController',
      templateUrl: "rent.html",
      css: 'stylesheets/screen.css'
    })
    .when("/hotels", {
      controller: 'MainController',
      templateUrl: "hotels.html",
      css: 'stylesheets/screen.css'
    })
    .when("/home", {
      controller: 'OtherController',
      templateUrl: "../index/index.html",
      css: '../index/stylesheets/screen.css'
    })

}]);

var app = angular.module('realEstateApp', ['ngRoute']);
app.directive("city", function () {
  return {
    restrict: 'E',
    templateUrl: "results.html"
  };
});
app.directive('head', ['$rootScope', '$compile', "applyFilters",
    function ($rootScope, $compile, applyFilters) {
    return {
      restrict: 'E',
      link: function (scope, elem) {
        var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
        elem.append($compile(html)(scope));
        scope.routeStyles = {};
        $rootScope.$on('$routeChangeStart', function (e, next, current) {
          if (current && current.$$route && current.$$route.css) {
            if (!angular.isArray(current.$$route.css)) {
              current.$$route.css = [current.$$route.css];
            }
            angular.forEach(current.$$route.css, function (sheet) {
              delete scope.routeStyles[sheet];
            });
          }
          if (next && next.$$route && next.$$route.css) {
            if (!angular.isArray(next.$$route.css)) {
              next.$$route.css = [next.$$route.css];
            }
            angular.forEach(next.$$route.css, function (sheet) {
              scope.routeStyles[sheet] = sheet;
            });
          }
          applyFilters.initResults();
        });
      }
    };
    }
]);


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
    .otherwise({
      redirectTo: "/rent"
    });
}]);

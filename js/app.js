(function() {
  angular
    .module('shoppingCartApp', ['ngRoute'])
    .config(config)

    config.$inject = ['$routeProvider', '$locationProvider']

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/shopping', {
          templateUrl: '../views/shopping.html'
        })
        .when('/checkout', {
          templateUrl: '../views/checkout.html'
        })
        .otherwise({redirectTo: '/shopping'})
      $locationProvider.html5Mode(true);
    }
})()
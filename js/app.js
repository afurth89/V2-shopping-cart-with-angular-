(function() {
  angular
    .module('shoppingCartApp', ['ngRoute'])
    .config(config)

    config.$inject = ['$routeProvider', '$locationProvider']

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/shopping', {
          templateUrl: '../templates/shopping.html'
        })
        .when('/checkout', {
          templateUrl: '../templates/checkout.html'
        })
        .otherwise({redirectTo: '/shopping'})
      $locationProvider.html5Mode(true);
    }
})()
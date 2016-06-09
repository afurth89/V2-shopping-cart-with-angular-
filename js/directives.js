//***************************************************************************
//SHOPPING - PARENT
//***************************************************************************
(function() {
  angular
    .module('shoppingCartApp')
    .directive('shoppingParent', function() {
      return {
        templateUrl: '../partials/shopping/layout.html'
      }
    })
})();  // MUST PUT A SEMICOLON HERE (or error is produced because IIFE's are not differentiated and tried to run together)

//***************************************************************************
//CHECKOUT - PARENT
//***************************************************************************
(function() {
  angular
    .module('shoppingCartApp')
    .directive('checkoutParent', function() {
      return {
        templateUrl: '../partials/checkout/layout.html'
      }
    })
})();


//***************************************************************************
//HEADER (exists within both Shopping and Checkout)
//***************************************************************************
(function() {
  angular
    .module('shoppingCartApp')
    .directive('appHeader', function() {
      return {
        templateUrl: '../partials/header.html'
      }
    })
})();

//***************************************************************************
//SHOPPING - Search and List
//***************************************************************************
(function() {
  angular
    .module('shoppingCartApp')
    .directive('shoppingSearch', function() {
      return {
        templateUrl: '../partials/shopping/search.html'
      }
    })
})();

(function() {
  angular
    .module('shoppingCartApp')
    .directive('shoppingList', function() {
      return {
        templateUrl: '../partials/shopping/list.html'
      }
    })
})();


//***************************************************************************
//CHECKOUT
//***************************************************************************
(function() {
  angular
    .module('shoppingCartApp')
    .directive('cartTotal', function() {
      return {
        templateUrl: '../partials/checkout/total.html'
      }
    })
})();

(function() {
  angular
    .module('shoppingCartApp')
    .directive('cartList', function() {
      return {
        templateUrl: '../partials/checkout/list.html'
      }
    })
})();
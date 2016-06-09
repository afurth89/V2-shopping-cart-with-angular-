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
})();

//***************************************************************************
//CHECKOUT - PARENT
//***************************************************************************

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
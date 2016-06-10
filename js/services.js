(function() {
  angular
    .module('shoppingCartApp')
    .service('ShoppingCartService', ShoppingCartService)


    ShoppingCartService.$inject = []

    function ShoppingCartService() {
      const inventory = seed();
      const selectedInventory = [];
      const categories = inventory
        .reduce(function(cur, next) {
          cur.push(next.categories)
          return cur;
        }, [])
        .reduce(function(cur, next) {
          // iterate through the 'next' item
          for (var i=0; i<next.length; i++) {
            // if the element is NOT in cur, push it
            if (!cur.includes(next[i])) {
              cur.push(next[i])
            }
          }
          return cur;
        }, [])
      debugger
      console.log(categories)
    }
})()
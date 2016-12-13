var nameApp = angular.module('starter', ['ionic']);

nameApp.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'list.html',
      controller: 'ListCtrl'
    })
    .state('coffee', {
      url: '/coffee',
      templateUrl: 'coffee.html',
      controller: 'CoffeeCtrl'
    })
    .state('icecream', {
      url: '/icecream',
      templateUrl: 'icecream.html',
      controller: 'IceCtrl'
    })
    .state('juice', {
      url: '/juice',
      templateUrl: 'juice.html',
      controller: 'JuiceCtrl'
    })
   .state('coffeeDetails', {
      url: '/coffee/:coffeename',
      templateUrl: 'coffeeDetails.html',
      controller: 'CoffeeDetailsCtrl'
    })
   .state('iceCreamDetails', {
      url: '/iceCream/:iceCreamName',
      templateUrl: 'iceCreamDetails.html',
      controller: 'IceCreamDetailsCtrl'
    })
   .state('juiceDetails', {
      url: '/juice/:juiceName',
      templateUrl: 'juiceDetails.html',
      controller: 'JuiceDetailsCtrl'
    });
 
  $urlRouterProvider.otherwise("/");
 
});

 nameApp.controller('cofeeCtrl',function($scope) {
   $scope. coffeeTypes = [{name: 'Cappuccino', imgFile:'cappuccinoCoffee.jpg', price: 100},  
                          {name: 'Cortado',imgFile:'cortadoCoffee.jpg', price: 50},
                          {name: 'Con panna',imgFile:'conPannaCoffee.jpg', price: 100},
                          {name: 'Corretto',imgFile:'correttoCoffee.jpg',price: 100},
                          {name: 'Doppio',imgFile:'doppioCoffee.jpg', price: 100},
                          {name: 'Espresso Lungo',imgFile:'espressoLungoCoffee.jpg', price: 100},
                          {name: 'Espresso Romano',imgFile:'espressoRomanoCoffee.jpg', price: 100},
                          {name: 'Long Black',imgFile:'longBlackCoffee.jpg', price: 100},
                          {name: 'Macchiato',imgFile:'macchiatoCoffee.jpg', price: 100},
                          {name: 'Ristretto', imgFile:'ristrettoCoffee.jpg',price: 100}];
                    
  });

  nameApp.controller('IceCreamCtrl',function($scope) {
   $scope. iceCreamTypes =[{name: 'Strawberry',imgFile:'strawberryIce.jpg', price: 100},  
                          {name: 'Chocolate',imgFile:'chocolateIce.jpg',price: 50},
                          {name: 'Kiwi',imgFile:'kiwiIce.jpg', price: 100},
                          {name: 'Gauva', imgFile:'gauvaIce.jpg',price: 100},
                          {name: 'Pineaple',imgFile:'pineapleIce.jpg', price: 100},
                          {name: 'Sitafal',imgFile:'sitafalIce.jpg',price: 100},
                          {name: 'Black Current',imgFile:'blackCurrentIce.jpg', price: 100},
                          {name: 'Cookie Cream',imgFile:'cookieCreamIce.jpg', price: 100},
                          {name: 'Almond Carnival',imgFile:'almondCarnivalIce.jpg', price: 100},
                          {name: 'American Nuts',imgFile:'americanNutsIce.jpg', price: 100},
                          {name: 'Chocolate Chips',imgFile:'chocolateChipsIce.jpg', price: 100}];
                    
  });

  nameApp.controller('JuicesCtrl',function($scope) {
   $scope. juiceTypes =[{name: 'Orange',imgFile:'orangeJuice.jpg', price: 100},  
                          {name: 'Strawberry',imgFile:'strawberryJuice.jpg', price: 50},
                          {name: 'Kiwi',imgFile:'kiwiJuice.jpg', price: 100},
                          {name: 'Pineaple',imgFile:'pineapleJuice.jpg', price: 100},
                          {name: 'Mango',imgFile:'mangoJuice.jpg',price: 100},
                          {name: 'Grapes',imgFile:'grapesJuice.jpg', price: 100},
                          {name: 'Chikoo',imgFile:'chikooJuice.jpg', price: 100},
                          {name: 'Litchi',imgFile:'litchiJuice.jpg', price: 100},
                          {name: 'Water Melon',imgFile:'watermelonJuice.jpg', price: 100},
                          {name: 'Kiwi',imgFile:'kiwiJuice.jpg', price: 100},
                          {name: 'Mix Fruit',imgFile:'mixFruitJuice.jpg',price:100}];
                    
  });

  nameApp.controller('DetailsCtrl', function($scope, $http, $stateParams, coffeeTypes) {
  coffeeTypes.find($stateParams.coffeename, function(type) {
    $scope.type = type;
  });
});

nameApp.factory('Authorization', function() {

  authorization = {};
  authorization.firstName = "";
  authorization.lastName = "";  
  return authorization;
});

/*nameApp.controller('searchCtrl', function($scope,coffeeTypes) {
 
  $scope.type = {
    name: 'Capccino'
  }
 
  $scope.searchCoffeeDB = function() {
 
    coffeeTypes.list($scope.movie.name, function(types) {
      $scope.types = types;
    });
     
  };
  
  $scope.searchCoffeeDB();
  
});
*/
nameApp.controller('ListCtrl', function($scope,  Authorization) {
  $scope.input = Authorization;  
});
 
nameApp.controller('CoffeeCtrl', function($scope, Authorization) {
  $scope.input = Authorization; 
});

nameApp.controller('IceCtrl', function($scope,  Authorization) {
  $scope.input = Authorization;  
});

nameApp.controller('JuiceCtrl', function($scope,  Authorization) {
  $scope.input = Authorization;  
});

nameApp.controller('CoffeeDetailsCtrl', function($scope,  Authorization) {
  $scope.input = Authorization;  
});

nameApp.controller('IceCreamDetailsCtrl', function($scope,  Authorization) {
  $scope.input = Authorization;  
});

nameApp.controller('JuiceDetailsCtrl', function($scope,  Authorization) {
  $scope.input = Authorization;  
});


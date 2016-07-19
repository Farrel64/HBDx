angular.module('pubDetail', [])

.controller('pubDetailCtrl', function($scope,  $stateParams) {

  var thisId =  $stateParams.pubId;

  $scope.menuBeer = [{name: "Blonde", demie: 3, pinte: 5}, {name: "Brune", demie: 2.5, pinte: 5}, {name: "Blanche", demie: 2.5, pinte: 4}, {name: "Rousse", demie: 3, pinte: 5}]
  $scope.menuCocktail = [{name:"Long Island", price: 4}, {name:"Mojito", price: 5}, {name:"Caïpirina", price: 4}, {name:"Sex On The Beach", price: 4} ]
  $scope.pubs = [{
    id: 1,
    name: "Mushroom",
    distance: 450,
    location: "Gambetta",
    happyStart: 17,
    happyEnd: 20,
    price: 3.50,
    image: "img/mushroom.jpg",
    rating: 4.2
  }, {
    id: 2,
    name: "Camelot",
    distance: 1535,
    location: "La Victoire",
    happyStart: 17.30,
    happyEnd: 19,
    price: 3.50,
    image: "img/camelot.jpg",
    rating: 3.8
  }, {
    id: 3,
    name: "Titi Twister",
    distance: 1475,
    location: "La Victoire",
    happyStart: 18,
    happyEnd: 21,
    price: 3.50,
    image: "img/titi.jpg",
    rating: 4.4
  }, ];



  $scope.pub = $scope.pubs[thisId-1];

})

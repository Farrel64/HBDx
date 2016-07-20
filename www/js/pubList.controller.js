angular.module('pubList', [])

.controller('pubListCtrl', function($scope, $ionicPopup) {

  $scope.showFilter = false;
  $scope.filters = {
    beer: false,
    wine: false,
    cocktail: false
  };

  $scope.pubs = [{
    id: 1,
    name: "Mushroom",
    distance: 450,
    location: "Gambetta",
    happyStart: 17,
    happyEnd: 20,
    price: 3.50,
    image: "img/mushroom.jpg",
    mainDrinkType: "Beer",
    secondDrinkType: "Cocktail",
    rating: [4.2]
  }, {
    id: 2,
    name: "Camelot",
    distance: 1535,
    location: "La Victoire",
    happyStart: 17.30,
    happyEnd: 19,
    price: 3.50,
    image: "img/camelot.jpg",
    mainDrink: "Cocktail",
    secondDrinkType: "Beer",
    rating: [3.8]
  }, {
    id: 3,
    name: "Titi Twister",
    distance: 1475,
    location: "La Victoire",
    happyStart: 18,
    happyEnd: 21,
    price: 3.50,
    image: "img/titi.jpg",
    mainDrink: "Beer",
    secondDrinkType: "Wine",
    rating: [4.6, 3.9]
  }, ];

  $scope.showInfo = function() {
    $ionicPopup.alert({
      title: 'Happy Bordeaux',
      template: "Cette application est actuellement en Alpha. Veuillez repasser plus tard pour des infos détaillées !",
      okText: "J'ai compris !",
      okType: "button-clear button-positive"
    })
  };

  $scope.showRating = function() {
    $ionicPopup.prompt({
      title: 'Rate this pub !',
      template: 'Enter your secret password',
      inputType: 'range'
    }).then(function(res) {
      console.log('rating is : ', res);
    });
  };
})

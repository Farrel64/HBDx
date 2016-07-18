angular.module('pubList', [])

.controller('pubListCtrl', function($scope){
  $scope.pubs =
    [
      {id: 1, name: "Mushroom", distance:450, location:"Gambetta", happyStart: 17, happyEnd: 20, price: 3.50, image: "img/mushroom.jpg"},
      {id: 2, name: "Camelot", distance:1535, location:"La Victoire", happyStart: 17.3, happyEnd: 19, price: 3.50, image: "img/camelot.jpg"},
      {id: 3, name: "Titi Twister", distance:1475, location:"La Victoire", happyStart: 18, happyEnd: 21, price: 3.50, image: "img/titi.jpg"},
    ];

})

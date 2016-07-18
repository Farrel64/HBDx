angular.module('pubDetail', [])

.controller('pubDetailCtrl', function($scope) {
  $scope.pub = {
    id: 1,
    name: "Mushroom",
    distance: 450,
    happyStart: 17,
    happyEnd: 20,
    price: 3.50,
    image: "img/mushroom.jpg"
  };

})

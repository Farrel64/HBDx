angular.module('starter', ['ionic'])

  .controller('TodoCtrl', function($scope, $ionicPopup, $ionicListDelegate){
    $scope.pubs =
      [
        {name: "Mushroom", distance:450, happyStart: 17, happyEnd: 20, price: 3.50, image: "img/mushroom.jpg"},
        {name: "Camelot", distance:1535, happyStart: 17.30, happyEnd: 19, price: 3.50, image: "img/camelot.jpg"},
        {name: "Titi Twister", distance:1475,  happyStart: 18, happyEnd: 21, price: 3.50, image: "img/titi.jpg"},
      ];

  })



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

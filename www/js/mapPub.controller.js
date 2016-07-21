angular.module('mapPub', [])

.controller('mapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {
    timeout: 10000,
    enableHighAccuracy: true
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
    position: {
      lat: 44.84057,
      lng: -0.58149
    },
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
    position: {
      lat: 44.83237,
      lng: -0.57107
    },
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
    position: {
      lat: 44.83175,
      lng: -0.56963
    },
    rating: [4.6, 3.9]
  }, ];


  $cordovaGeolocation.getCurrentPosition(options).then(function(position) {

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function() {
      for (var i = 0; i < $scope.pubs.length; i++) {
        console.log(i);
        var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: $scope.pubs[i].position
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            $state.go('pub', ({
              "pubId": $scope.pubs[i].id
            }));
          }
        })(marker, i));
      }
    });
  }, function(error) {
    console.log("Could not get location");
  });
});

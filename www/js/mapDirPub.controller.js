angular.module('mapDirPub', [])

.controller('mapDirCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    $scope.myPosition = latLng;

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    directionsDisplay.setMap($scope.map);

    //Wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    });

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      directionsService.route({
        origin: $scope.myPosition,
        destination: "Le Mushroom Café, 5 Rue Georges Bonnac, Bordeaux",
        travelMode: google.maps.TravelMode.WALKING
      }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }

  }, function(error){
    console.log("Could not get location");
  });

  function gotoPub() {
    $state.go('pub', ({"pubId":2}));
  }




});

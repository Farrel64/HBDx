angular.module('starter', ['ionic', 'pubList', 'pubDetail', 'mapPub', 'mapDirPub', 'ngCordova'])

.config(function($stateProvider, $urlRouterProvider,  $ionicConfigProvider) {

  $stateProvider

    .state('pubs', {
    url: '/pubs',
    templateUrl: 'templates/pubs.html',
    controller: 'pubListCtrl'
  })

  .state('pub', {
    url: '/pubs/:pubId',
    templateUrl: 'templates/pub.html',
    controller: 'pubDetailCtrl'
  })

  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

  .state('mapDir', {
    url: '/map/:pubId',
    templateUrl: 'templates/map.html',
    controller: 'mapDirCtrl'
  })


  $urlRouterProvider.otherwise('/pubs');

  //$ionicConfigProvider.scrolling.jsScrolling(false);
})

.filter('distFilter', function () {
  return function (items, dist) {
  var filtered = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item.distance <= parseInt(dist)) {
      filtered.push(item);
    }
  }
  return filtered;
  };
})



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

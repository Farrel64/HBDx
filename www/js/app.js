angular.module('starter', ['ionic', 'pubList', 'pubDetail', 'mapPub', 'ngCordova'])

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


  $urlRouterProvider.otherwise('/pubs');

  //$ionicConfigProvider.scrolling.jsScrolling(false);
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

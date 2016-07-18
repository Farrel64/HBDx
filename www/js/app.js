angular.module('starter', ['ionic', 'pubList', 'pubDetail'])

  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider

    .state('pubs', {
      url:'/pubs',
      templateUrl: 'templates/pubs.html'
    })

    .state('pub', {
      url: '/pubs/:pubId',
      templateUrl: 'templates/pub.html'
    })

    $urlRouterProvider.otherwise('/pubs');
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

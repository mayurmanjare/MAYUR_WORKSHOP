// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.calendar', {
    url: '/calendar',
    views: {
      'menuContent': {
        templateUrl: 'templates/calender.html'
      }
    }
  })

  .state('app.myacc', {
      url: '/myacc',
      views: {
        'menuContent': {
          templateUrl: 'templates/myacc.html'
        }
      }
    })
   .state('app.contactus', {
      url: '/contactus',
      views: {
        'menuContent': {
          templateUrl: 'templates/contactus.html'
        }
      }
    })
      .state('app.logout', {
      url: '/logout',
      views: {
        'menuContent': {
          templateUrl: 'templates/logout.html'
        }
      }
    })
    .state('app.allcource', {
      url: '/allcource',
      views: {
        'menuContent': {
          templateUrl: 'templates/allcource.html',
          controller: 'courcecntrl'
        }
      }
    })
      .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller:'sildeshow'
      
        }
      }
    })
.state('app.myorder',{
  url:'/myorder',
  views:{
    'menuContent':{
      templateUrl:'templates/myorder.html'
    }
  }
})
  .state('app.single', {
    url: '/cource/:courceId',
    views: {
      'menuContent': {
        templateUrl: 'templates/cource.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

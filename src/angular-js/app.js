import angular from 'angular';

import module from './app.module';
// import AppStateConfig from './shared/constants/app-states.config.js';

// export default angular.module(module)
//   .config(($urlRouterProvider, $locationProvider) => {
//     $locationProvider.html5Mode(true);
//   })

  // .provider('AppStateConfig', AppStateConfig)
  // .config((AppStateConfigProvider) => {
  //   AppStateConfigProvider.initialize();
  // });


export default angular.module(module)
  .config(($stateProvider, $urlRouterProvider) => {
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');

    // $stateProvider

    //   // HOME STATES AND NESTED VIEWS ========================================
    //   .state('home', {
    //     url: '/home',
    //     template: require('./sections/app-container.html'),
    //   })

    //   // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    //   .state('about', {
    //     // we'll get to this in a bit
    //   });
  })

// routerApp.config(function ($stateProvider, $urlRouterProvider) {

//   $urlRouterProvider.otherwise('/home');

//   $stateProvider

//     // HOME STATES AND NESTED VIEWS ========================================
//     .state('home', {
//       url: '/home',
//       templateUrl: 'partial-home.html'
//     })

//     // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
//     .state('about', {
//       // we'll get to this in a bit
//     });

// });
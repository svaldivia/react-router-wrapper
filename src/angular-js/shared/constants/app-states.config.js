import appStates from './app-states';

class AppStateConfig {

  constructor($stateProvider, $urlRouterProvider) {
    this.$stateProvider = $stateProvider;
    this.$urlRouterProvider = $urlRouterProvider;
  }

  initialize() {
    this.addStates();

    this.$urlRouterProvider.otherwise(this.redirectTo404);
  }

  addStates() {
    this.addState(appStates.ANGULAR_TEST,   this.appRootState(),      '');
    this.addState(appStates.ADD,            this.additionState(),        '/');
    this.addState(appStates.FOUR_OH_FOUR,   this.fourOhFourState(),   '/404');
  }

  $get($state) {
    return { getStates: $state.get };
  }

  addState(stateName, stateConfig, url) {
    this.$stateProvider.state(stateName, _.extend({}, stateConfig, { url }));
  }

  // State definitions //

  appRootState() {
    return {
      abstract: true,
      template: require('../../sections/app-container.html'),
    };
  }

  additionState() {
    return {
      template: require('../../sections/add/add.html'),
      controller: 'AddController',
      controllerAs: 'vm',
      bindToController: true,
    };
  }

  fourOhFourState() {
    return {
      template: require('../../sections/error/404.html'),
    };
  }

  redirectTo404($injector, $location) {
    let $state = $injector.get('$state');

    $state.go(appStates.FOUR_OH_FOUR, null, { location: false });

    return $location.path();
  }

}

AppStateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default AppStateConfig;

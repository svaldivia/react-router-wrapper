import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Load modules
// import Constants from './app.constants';
// import Add from './sections/add';

export default angular
  .module('AngularApp', [
    uiRouter,
    // Constants.name,
    // Add.name,
  ])
  .name;
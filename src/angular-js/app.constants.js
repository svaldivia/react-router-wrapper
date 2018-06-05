
import angular from 'angular';

import appStates from './shared/constants/app-states';

export default angular
  .module('at.constants', [])
  .constant('appStates', angular.copy(appStates));

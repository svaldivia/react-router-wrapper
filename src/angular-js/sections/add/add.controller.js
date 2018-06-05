class AddController {

  constructor(
    $state,
    appStates,
    ApiService,
  ) {
    this.$state = $state;
    this.appStates = appStates;
    this.ApiService = ApiService;

    this.passwordRegex = this.passwordRegex();
    this.test = "Success";
  }

  /////////////////////////

}

AddController.$inject = ['$state', 'appStates', 'ApiService'];

export default AddController;

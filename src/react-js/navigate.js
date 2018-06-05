// Function used to override Backbone's navigate function and use react router instead

const DEFAULT_OPTIONS = {
  replace: false,
};

export default class Navigate {
  constructor(history) {
    this.history = history;
  }

  navigate(uri, options = DEFAULT_OPTIONS) {
    const parsedUri = this.parseUri(uri);

    if (options.trigger === false) {
      console.warn('navigate with options.trigger: false is not supported');
    }

    if (options.replace) {
      this.history.replace(parsedUri);
      return;
    }

    this.history.push(parsedUri);
  }

  // Might change depending on Backbone navigate implementation
  parseUri(uri){
    const noHastagUri = uri.replace('#', '');

    if(noHastagUri.charAt(0) !== '/') {
      return `/${noHastagUri}`;
    }

    return noHastagUri;
  }
}

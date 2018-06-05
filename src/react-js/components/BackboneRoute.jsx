import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import Navigate from '../navigate.js';

// TODO: Define if this implementation is better than the more verbose using the wrapper
export default class BackboneRoute extends Component {
  instance = null;

  constructor(props) {
    super(props);

    this.navigate = new Navigate(props.history);
  }

  componentWillReceiveProps(nextProps) {
    this.refreshView();
  }

  componentDidMount() {
    this.createView();
  }

  componentWillUnmount() {
    this.cleanupView();
  }

  createView() {
    const {
      View,
      match,
    } = this.props;

    // const urlParams = this.getUrlParamsAsArray(match.params);

    this.instance = new View(...urlParams);
    this.instance.router = this.navigate;
  }

  cleanupView() {
    if (this.instance) {
      this.instance.remove();
      this.instance.unbind();
      this.instance.$el.empty();
      this.instance = null;
    }
  }

  refreshView() {
    if (!this.instance) {
      this.createView();
      return;
    }

    this.instance.render();
  }

  getUrlParamsAsArray(params) {

  }

  render({ View, ...rest }) {
    return (
      <Route {...rest} render={() => (
        <div>
          <div id="container"></div>
        </div>
      )}/>
    );
  }
}


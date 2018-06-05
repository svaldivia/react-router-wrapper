import React, {Component} from 'react';

import Navigate from '../navigate.js';

export default class BackboneWrapper extends Component {
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
      urlParams,
    } = this.props;

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

  render() {
    return (
      <div>
        <div id="container"></div>
      </div>
    );
    // return <div id="container" ref={this.registerElement}></div>;
  }
}

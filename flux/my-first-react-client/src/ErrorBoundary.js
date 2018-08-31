import React, { Component, Fragment } from 'react';

import Home from './home';
import './App.css';

class ErrorBoundary extends Component {

  state = {
    error: false
  };


  componentDidCatch() {
    this.setState({error: true});
  }

  render() {
    if (this.state.error) {
      return <h1> Error occurred</h1>;
    }
    return this.props.children
    // return <Fragment><Home/><div>new div</div></Fragment>
  }
}

export default ErrorBoundary;

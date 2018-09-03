import React, { Component, Fragment } from 'react';
import T from "prop-types";
import Home from './home';
import './App.css';

class App extends Component {

  static childContextTypes = {
    message: T.string
  };

  getChildContext() {
    return {message: this.state.message};
  }
  state = {
    message: 'Hot reloading'
  }
  updateMessage = message => this.setState({message});
  render() {
    return <Home updateMessage={this.updateMessage}/>
  }
}

export default App;

import React, { Component, Fragment } from 'react';

import Home from './home';
import './App.css';

class App extends Component {
  render() {
    return <Home/>
    // return <Fragment><Home/><div>new div</div></Fragment>
  }
}

export default App;

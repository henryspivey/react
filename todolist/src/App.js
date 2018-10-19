import React, { Component } from 'react';
import logo from './logo.svg';
import Logo from './components/Logo/Logo';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/List/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} />

        <TodoList />
      </div>
    );
  }
}

export default App;

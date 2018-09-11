import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'; // can leave off the .js
import './App.css';


class App extends Component {
  // any change in state will automatically invoke re render
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Henry', age: 24},
    ],
    otherStuff: 'some other stuff'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // this.state.persons[1].name = "bob" don't do this.  React no likey
    // Component obj has a set state method
    this.setState({persons: [
      {name: newName, age: 29},
      {name: 'Henry', age: 25},
    ]})  // merges new state with the old one. LEAVES OTHER STUFF UNTOUCHED
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 24},
      ]
    })
  }


  render() {

    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi Im a react app </h1>
                              // passes a reference IMPORTANT don't use ()
        <button style={style} onClick={() => {this.switchNameHandler("test1")}}>Switch Name</button>
        // <Person name="Henry" age="4">My hobbies: Cooking</Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, "test2")}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler.bind(this)}/>
      </div>
      // gets compiled to return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello!!!!'));
    )
  }
}

export default App;

import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
import logo from './logo.svg';
import Person from './Person/Person'; // can leave off the .js
import './App.css';



class App extends Component {
  // any change in state will automatically invoke re render
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Henry', age: 24},
    ],
    otherStuff: 'some other stuff',
    showPersons: false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    // copy person we're typing in
    person.name = event.target.value
    // reconstruct the persons obj
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    // assures this returns to the class
    const doesShow = this.state.showPersons;
    this.setState({

      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // copies the og array and returns a new one
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style= {
      backgroundColor: 'green',
      color: '#ffffff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    // preferred way of outputting conditional content
    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)} click={this.deletePersonHandler.bind(this)} name={person.name} age={person.age} />
            })}

          </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = []
    if (this.state.persons.length <= 1) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1 ) {
      classes.push('bold');
    }
    return (

      <div className="App">
        <h1 className={classes.join(' ')}>Hi Im a react app </h1>

        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}

      </div>

      // gets compiled to return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello!!!!'));
    )
  }
}

export default App; // higher order component

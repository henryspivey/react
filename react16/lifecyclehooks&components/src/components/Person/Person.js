import React, {Component} from 'react';
import Person from './Person-component';

class Persons extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount(){
    console.log('person.js component will mount')
  }
  componentDidMount(){
    console.log('person.js component did mount')
  }

  componentWillReceiveProps(nextProps) {
    // called after render() which is part of the update lifecycle
    console.log('UPDATED person.js inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATED person.js insdie shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }


  render() {
    return this.props.persons.map((person, index) => {
      return <Person key={person.id} changed={(event) => this.props.changed(event, person.id)} clicked={this.props.clicked(index)} name={person.name} age={person.age} />
    })
  }
}

export default Persons;

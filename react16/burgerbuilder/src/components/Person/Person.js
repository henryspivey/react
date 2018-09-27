import React from 'react';
import Person from './Person-component';

const persons = (props) => (
  props.persons.map((person, index) => {
    return <Person key={person.id} changed={(event) => props.changed(event, person.id)} clicked={props.clicked(index)} name={person.name} age={person.age} />
  })
)

export default persons;
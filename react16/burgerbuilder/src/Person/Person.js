import React from 'react';

import './Person.css';
//  best way to make a component, clear about what they do, don't manipulate app state, dynamic
const person = (props) => {
  // props is an obj, passed from outside
  // state is like props, but passed from inside
  // transformed to React.createElement so we need to import React

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>My name is {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person;

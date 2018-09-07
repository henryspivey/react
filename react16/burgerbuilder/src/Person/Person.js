import React from 'react';
//  best way to make a component, clear about what they do, don't manipulate app state, dynamic
const person = (props) => {
  // props is an obj, passed from outside
  // state is like props, but passed from inside
  // transformed to React.createElement so we need to import React
  return (
    <div>
      <p onClick={props.click}>My name is {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;

import React from 'react';


const List = (props) => {

  const listitems = Object.keys(props.todoitems).map(itemIndex => {
    return (
      <li key={itemIndex}><span style={{textTransform: 'capitalize'}}>{parseInt(itemIndex)+1}</span>: {props.todoitems[itemIndex]}</li>
    )
  })

  return (
    <ul>
      {listitems}
    </ul>
  )
}

export default List;

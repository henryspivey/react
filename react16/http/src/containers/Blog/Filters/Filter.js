import React, {Component} from 'react';

const DropDownFilter = (props) => {


  const options = [...props.ids].map((id, index) => {
      return (
        <option key={index} value={id}>{id}</option>
      )
    })

    return (
      <label>
        {props.label}
        <select onChange={props.handleChange}>
          {options}
        </select>
      </label>
    )
}




const TextFilter = (props) => {
  return (
    <div>
      <label>
        {props.label}
        <input type="text" placeholder={props.placeholder} onChange={props.handleChange} />
      </label>
    </div>

  )
}

export {
    TextFilter,
    DropDownFilter
}

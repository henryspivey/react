import React, {Component} from 'react';

const Filter = (props) => {

    const options = [...props.ids].map((id, index) => {
      return (
        <option key={index} value={id}>{id}</option>
      )
    })
    return (
      <label>
        <select onChange={props.handleChange}>
          {options}
        </select>
      </label>
    )
}

export default Filter;

import React from 'react';
import reactLogo from "../../logo.svg";
import './Logo.css';
const logo = (props) => {
  // console.log([...Array(parseInt(props.times))])
  const logos = [...Array(parseInt(props.times))].map((logoKey, index) => {
    return (
      <li key={index} className="logo" style={parseInt(props.times)> 1 ? {float:'left'} : {float:'none'}}>
        <img src={reactLogo} alt="Logo"  style={{height: props.height}} />
      </li>
    )
  })
  return (<ul className="LogoList">{logos}</ul>)

};

export default logo;

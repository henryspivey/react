import React from 'react';
import reactLogo from "../../logo.svg";
import './Logo.css';
const logo = (props) => {

  const logos = [...Array(parseInt(props.times))].map((logoKey, index) => {
    return (
        <li key={index} className="logo"><img src={reactLogo} alt="Logo"  style={{height: props.height}} /></li>
    )
  })
  return (
    <ul className="LogoList">{logos}</ul>
  );

};


export default logo;

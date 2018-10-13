import React from 'react';
import classes from './DrawerToggle.css';
import Aux from '../../../../hoc/Aux';
const drawerToggle = (props) => {
  return (
      <Aux>
        <div className={classes.DrawerToggle} onClick={props.clicked}>
        
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Aux>
  )
};


export default drawerToggle;

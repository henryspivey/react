import React from 'react';
import classes from './DrawerToggle.css';
import Aux from '../../../../hoc/Aux';
const drawerToggle = (props) => {
  return (
      <Aux>
        <div className={classes.HamburgerButton} onClick={props.clicked}>
          HamburgerButton
        </div>
      </Aux>
  )
};


export default drawerToggle;

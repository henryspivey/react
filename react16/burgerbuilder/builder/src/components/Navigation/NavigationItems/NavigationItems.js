import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Burger Buildre</NavigationItem>
    <NavigationItem link="/orders">orders</NavigationItem>
  </ul>
);


export default navigationItems;

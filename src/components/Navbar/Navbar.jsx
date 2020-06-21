import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={ classes.nav }>
      <div className={ classes.item }>
        <NavLink to="/profile" activeClassName={ classes.activeLink }>Profile</NavLink>
        <div><NavLink to="/messages" activeClassName={ classes.activeLink }>Massages</NavLink></div>
        <div><NavLink to="/news" activeClassName={ classes.active }>News</NavLink></div>
        <div className={ classes.item2 }><NavLink to="/music" activeClassName={ classes.activeLink }>Music</NavLink>
        </div>
        <div><NavLink to="/settings" activeClassName={ classes.activeLink }>Settings</NavLink></div>
      </div>
    </nav>
  );
}

export default Navbar;
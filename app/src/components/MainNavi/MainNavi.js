import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';

import classes from './MainNavi.module.css';

const MainNavi = () => {
  return (
    <div className={classes.navi}>
      <nav>
        <Logo />
        <ul>
          <li>
            <NavLink to='/'>Story</NavLink>
          </li>
          <li>
            <NavLink to='/shop'>Hambáč ke dveřím</NavLink>
          </li>
          <li>
            <NavLink to='/menu'>Menu</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavi;

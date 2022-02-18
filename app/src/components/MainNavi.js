import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavi.module.css';

const MainNavi = () => {
  return (
    <div className={classes.navi}>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Story</NavLink>
          </li>
          <li>
            <NavLink to='/'>Hambáč ke dveřím</NavLink>
          </li>
          <li>
            <NavLink to='/'>Menu</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavi;

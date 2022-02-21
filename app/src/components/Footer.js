import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import BottomSvg from './BottomSvg';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <Fragment>
      <BottomSvg />
      <div className={classes.footstyle}>
        <nav className={classes.pos}>
          <ul>
            <li>
              <NavLink to='/'>Servis linka</NavLink>
            </li>
            <li>
              <NavLink to='/'>Kontakty</NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.tel}>
          <h2>Tel. číslo: +420 777 648 999</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;

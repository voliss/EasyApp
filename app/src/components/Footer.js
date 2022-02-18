import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <Fragment>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#ffd700'
          fillOpacity='1'
          d='M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,133.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>
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

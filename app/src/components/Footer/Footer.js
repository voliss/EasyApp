import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import BottomSvg from './BottomSvg';

import classes from './Footer.module.css';

const Footer = () => {
  // useEffect(() => {
  //   window.location.href = 'https://www.seznam.cz/';
  // }, []);

  return (
    <Fragment>
      <BottomSvg />
      <div className={classes.footstyle}>
        <nav className={classes.pos}>
          <ul>
            <li>
              <NavLink
                to={{ pathname: 'https://www.facebook.com/' }}
                target='_blank'
              >
                <img
                  src='http://127.0.0.1:8887/facebook.png'
                  alt='fb'
                  className={classes.fb}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: 'https://www.instagram.com/' }}
                target='_blank'
              >
                <img src='http://127.0.0.1:8887/instagram.png' alt='ig' />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: 'https://www.twitter.com/' }}
                target='_blank'
              >
                <img src='http://127.0.0.1:8887/twitter.png' alt='tw' />
              </NavLink>
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

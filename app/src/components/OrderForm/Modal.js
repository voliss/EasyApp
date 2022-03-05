import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Pozadi = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Pozadi onClose={props.onClose} />, portalElement)}
    </Fragment>
  );
};

export default Modal;

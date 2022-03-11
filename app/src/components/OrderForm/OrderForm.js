import React from 'react';

import classes from './OrderForm.module.css';

const OrderForm = () => {
  return (
    <form className={classes.forma}>
      <div className={classes.formBox}>
        <label htmlFor=''>Jmeno:</label>
        <input type='text' />
      </div>
      <div className={classes.formBox}>
        <label htmlFor=''>Prijmeni:</label>
        <input type='text' />
      </div>
      <div className={classes.formBox}>
        <label htmlFor=''>Ulice:</label>
        <input type='text' />
      </div>
      <div className={classes.formBox}>
        <label htmlFor=''>Mesto:</label>
        <input type='text' />
      </div>
      <div className={classes.formBox}>
        <label htmlFor=''>E-mail:</label>
        <input type='text' />
      </div>
    </form>
  );
};

export default OrderForm;

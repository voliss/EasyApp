import React, { Fragment } from 'react';

import OrderItem from './OrderItem';
import OrderForm from './OrderForm';
import ButtonSubmit from '../Button/ButtonSubmit';

import classes from './OrderModule.module.css';

const OrderFormModule = () => {
  return (
    <Fragment>
      <div className={classes.box}>
        <OrderItem />
        <OrderForm />
        <ButtonSubmit>Odeslat</ButtonSubmit>
      </div>
    </Fragment>
  );
};

export default OrderFormModule;

import React, { Fragment } from 'react';

import OrderItem from './OrderItem';
import OrderForm from './OrderForm';

import classes from './OrderModule.module.css';

const OrderForm = () => {
  return (
    <Fragment>
      <OrderItem />
      <OrderForm />
    </Fragment>
  );
};

export default OrderForm;

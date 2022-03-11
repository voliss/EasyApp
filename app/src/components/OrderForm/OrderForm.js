import React from 'react';

const OrderForm = () => {
  return (
    <form>
      <div>
        <label htmlFor=''>Jmeno:</label>
        <input type='text' />
      </div>
      <div>
        <label htmlFor=''>Prijmeni:</label>
        <input type='text' />
      </div>
      <div>
        <label htmlFor=''>Ulice:</label>
        <input type='text' />
      </div>
      <div>
        <label htmlFor=''>Mesto:</label>
        <input type='text' />
      </div>
      <div>
        <label htmlFor=''>E-mail:</label>
        <input type='text' />
      </div>
    </form>
  );
};

export default OrderForm;

import React from 'react';

const OrderItem = () => {
  return (
    <li>
      <div>
        <h2>Lipak</h2>
        <div>
          <span>169</span>
          <span>1 x</span>
        </div>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

export default OrderItem;

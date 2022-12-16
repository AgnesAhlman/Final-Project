import React from 'react';

const CartItem = (props) => {
  return (
    <li>
      <div>
        <span>x{props.product.quantity} </span>
        <span>{props.product.price * props.product.quantity}:-</span>
      </div>

      <button type="button" onClick={() => {}}>
        -
      </button>
      <button type="button" onClick={() => {}}>
        +
      </button>
    </li>
  );
};

export default CartItem;

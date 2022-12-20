import React from 'react';
import { useDispatch } from 'react-redux';
import cartRed from '../../reducers/cartRed';

const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <img
          src={`https://storage.cloud.google.com/finalproject-posters/${props.product.img}`}
          alt=""
        />
        <p>{props.product.title}</p>
        <span>x{props.product.quantity} </span>
        <span>{props.product.price * props.product.quantity}:-</span>
      </div>

      <button
        type="button"
        onClick={() => dispatch(cartRed.actions.removeItem(props.product))}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => dispatch(cartRed.actions.addItem(props.product))}
      >
        +
      </button>
    </li>
  );
};

export default CartItem;

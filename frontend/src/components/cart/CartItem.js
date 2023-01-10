import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../reducers/cart';

const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <img src={props.product.img} alt="" />
        <p>{props.product.title}</p>
        <span>x{props.product.quantity} </span>
        <span>{props.product.price * props.product.quantity}:-</span>
      </div>

      <button
        type="button"
        onClick={() => dispatch(removeFromCart(props.product))}
      >
        -
      </button>
      <button type="button" onClick={() => dispatch(addToCart(props.product))}>
        +
      </button>
    </li>
  );
};

export default CartItem;

import ItemBlock from 'blocks/ItemBlock';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../reducers/cart';

const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <ItemBlock>
      <div>
        <img src={props.product.img} alt="" />
      </div>
      <div>
        <p>{props.product.title}</p>

        <div>
          <span>{props.product.quantity} </span>
          <button
            type="button"
            onClick={() => dispatch(addToCart(props.product))}
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={() => dispatch(removeFromCart(props.product))}
        >
          <img src="/trashcan.svg" alt="trashcan-icon" /> Remove Item
        </button>
      </div>
      <ItemBlock.PriceContainer>
        <span>{props.product.price * props.product.quantity}:-</span>
      </ItemBlock.PriceContainer>
    </ItemBlock>
  );
};

export default CartItem;

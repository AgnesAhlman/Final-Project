import React from 'react';
import { useDispatch } from 'react-redux';
import cartRed from '../reducers/cartRed';

const Poster = (props) => {
  const dispatch = useDispatch();

  return (
    <article>
      <span> {props.product.title}</span>
      <p>{props.product.price}</p>

      <button
        type="button"
        onClick={() => dispatch(cartRed.actions.addItem(props.product))}
      >
        Add to cart
      </button>
    </article>
  );
};

export default Poster;

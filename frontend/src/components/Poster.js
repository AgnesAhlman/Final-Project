import React from 'react';
import { useDispatch } from 'react-redux';
import cartRed from '../reducers/cartRed';
import { PosterContent } from './styles/Containers';

const Poster = (props) => {
  const dispatch = useDispatch();
  console.log(props.product.img);

  return (
    <PosterContent>
      <img src={props.product.img} alt="" />
      <span> {props.product.title}</span>
      <p>fr. {props.product.price} kr</p>

      <button
        type="button"
        onClick={() => dispatch(cartRed.actions.addItem(props.product))}
      >
        Add to cart
      </button>
    </PosterContent>
  );
};

export default Poster;

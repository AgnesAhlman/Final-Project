import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cartRed from '../reducers/cartRed';
import { PosterContent } from './styles/Containers';

const Poster = (props) => {
  const dispatch = useDispatch();

  if (!props.product) {
    return null;
  }

  return (
    <PosterContent>
      <Link to={`/posters/${props.product._id}`}>
        <img src={props.product.img} alt="" />
        <span> {props.product.title}</span>
        <p>fr. {props.product.price} kr</p>
      </Link>

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

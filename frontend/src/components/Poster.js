import React from 'react';
import { useDispatch } from 'react-redux';
import cartRed from '../reducers/cartRed';
import PosterContent from '../blocks/PosterContent';
import Links from '../elements/Links';

const Poster = (props) => {
  const dispatch = useDispatch();

  if (!props.product) {
    return null;
  }

  return (
    <PosterContent>
      <Links to={`/posters/${props.product._id}`}>
        <article>
          <PosterContent.Image src={props.product.img} alt="" />
          <span> {props.product.title}</span>
          <p>fr. {props.product.price} kr</p>
        </article>
      </Links>

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

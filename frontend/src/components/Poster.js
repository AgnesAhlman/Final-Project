import React from 'react';

const Poster = (props) => {
  return (
    <article>
      <span> {props.product.title}</span>
      <p>{props.product.price}</p>

      <button type="button" onClick={() => {}}>
        Add to cart
      </button>
    </article>
  );
};

export default Poster;

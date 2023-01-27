import React from 'react';
import PosterContent from '../blocks/PosterContent';
import Links from '../elements/Links';

const Poster = (props) => {
  if (!props.product) {
    return null;
  }

  return (
    <PosterContent>
      <Links to={`/posters/${props.product._id}`}>
        <article>
          <PosterContent.Image src={props.product.img} alt="" />
          <PosterContent.RoomImg src={props.product.roomImg} alt="" />
        </article>
        <PosterContent.InfoContainer>
          <h3> {props.product.title}</h3>
          <h4>
            <p>fr. </p> {props.product.price} <p> kr</p>
          </h4>
        </PosterContent.InfoContainer>
      </Links>
    </PosterContent>
  );
};

export default Poster;

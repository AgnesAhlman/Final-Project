import React from 'react';
import styled from 'styled-components';

const CartCardContainer = styled.div`
  background-color: white;
  position: absolute;
  width: 100px;
  height: 200px;
  top: 50px;
  right: 0;
  padding: 10px;
  box-shadow: 2px 2px 2px #ccc;
  z-index: 1;
`;

const CartCard = () => {
  return (
    <CartCardContainer>
      <h3>Your Cart</h3>
    </CartCardContainer>
  );
};

export default CartCard;

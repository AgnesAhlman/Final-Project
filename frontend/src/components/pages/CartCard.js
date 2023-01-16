import useCartProducts from 'hooks/useCartProducts';
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

  div {
    width: auto;
  }

  img {
    max-width: 2rem;
  }
`;

const CartCard = () => {
  // const allProducts = useSelector((store) => store.products.items);
  const { totalPrice, cartProducts } = useCartProducts();
  console.log('cartProduct', cartProducts);

  return (
    <CartCardContainer>
      <div>
        <h3>Your Cart</h3>
        {cartProducts.map((cartProduct) => {
          console.log('cartProduct', cartProduct);
          return <img key={cartProduct._id} src={cartProduct.img} alt="" />;
        })}
        <p>Total:{totalPrice}</p>
      </div>
    </CartCardContainer>
  );
};

export default CartCard;

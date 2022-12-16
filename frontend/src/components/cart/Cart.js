import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const products = [];
  const totalPrice = 0;

  return (
    <>
      <p>Total:·{totalPrice}:-</p>
      <ul>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Cart;

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const products = useSelector((store) => store.cartRed.items);
  const totalPrice = 0;

  return (
    <div>
      <p>Total:·{totalPrice}:-</p>

      <ul>
        {products.map((product) => (
          <CartItem key={product.posterID} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;

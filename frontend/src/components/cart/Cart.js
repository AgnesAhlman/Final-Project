/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const products = useSelector((store) => store.cartRed.items);
  const totalPrice = useSelector((store) =>
    store.cartRed.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );

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

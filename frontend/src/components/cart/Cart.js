/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable prettier/prettier */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((store) => store.cartRed.items);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const totalCartItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
      <p>Total price:·{totalPrice}:-</p>
      <p>Total items:·{totalCartItems}</p>

      <ul>
        {cartItems.map((product) => (
          <CartItem key={product.posterID} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;

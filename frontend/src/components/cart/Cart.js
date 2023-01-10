/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosters } from 'reducers/products';
import CartItem from './CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const products = useSelector((store) => store.products.items);

  useEffect(() => {
    if (!products.length) {
      dispatch(getPosters());
    }
  });

  // Find products in the cart.
  const cartProducts = useMemo(() => {
    if (!products.length) {
      return [];
    }

    return (
      cartItems
        .map((cartItem) => {
          const product = products.find((p) => p._id === cartItem.posterId);
          if (!product) {
            return null;
          }

          return {
            ...product,
            quantity: cartItem.quantity
          };
        })
        // Filter out null
        .filter((item) => item)
    );
  }, [products, cartItems]);

  console.log(cartItems, products, cartProducts);

  const totalPrice = useMemo(() => {
    return cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartProducts]);

  const totalCartItems = useMemo(() => {
    return cartProducts.reduce((total, item) => total + item.quantity, 0);
  }, [cartProducts]);

  return (
    <div>
      <p>Total price:·{totalPrice}:-</p>
      <p>Total items:·{totalCartItems}</p>

      <ul>
        {cartProducts.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;

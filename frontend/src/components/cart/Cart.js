/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable prettier/prettier */
import EmptyCart from 'blocks/EmptyCart';
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
      {!cartItems.length ? (
        <EmptyCart>
          <h1>Shopping Cart ({totalCartItems})</h1>
          <p>Oh the cart is empty! :(</p>
        </EmptyCart>
      ) : (
        <div>
          <p>Total price:·{totalPrice}:-</p>
          <h1>Shopping Cart ({totalCartItems})</h1>
          <ul>
            {cartProducts.map((product) => (
              <CartItem key={product._id} product={product} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;

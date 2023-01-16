import EmptyCart from 'blocks/EmptyCart';
import useCartProducts from 'hooks/useCartProducts';

import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const { cartProducts, cartItems, totalCartItems, totalPrice } =
    useCartProducts();

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

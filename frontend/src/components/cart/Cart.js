import EmptyCart from 'blocks/EmptyCart';
import Grid from 'blocks/Grid';
import ItemBlock from 'blocks/ItemBlock';
import Button from 'elements/Button';

import useCartProducts from 'hooks/useCartProducts';

import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const { cartProducts, cartItems, totalCartItems, totalPrice } =
    useCartProducts();

  if (!cartItems.length) {
    return (
      <EmptyCart>
        <h1>Shopping Cart ({totalCartItems})</h1>
        <p>Oh the cart is empty! :(</p>
      </EmptyCart>
    );
  }

  return (
    <>
      <h1>Shopping Cart ({totalCartItems})</h1>
      <Grid>
        <Grid.Cell width={2 / 3}>
          {cartProducts.map((product) => (
            <CartItem product={product} key={product._id} />
          ))}
        </Grid.Cell>
        <Grid.Cell width={1 / 3}>
          <ItemBlock column>
            <h1>Total </h1>
            <p>{totalPrice} kr</p>
            <Button primary type="button">
              ORDER
            </Button>
          </ItemBlock>
        </Grid.Cell>
      </Grid>
    </>
  );
};

export default Cart;

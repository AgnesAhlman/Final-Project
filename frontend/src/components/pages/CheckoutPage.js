import React from 'react';

import Footer from 'components/Footer';
import { Background } from 'elements/Background';

import { Wrapper } from 'elements/Wrapper';

import Grid from 'blocks/Grid';
import useCartProducts from 'hooks/useCartProducts';
import Cart from '../cart/Cart';
import Navbar from '../Navbar';

const CheckoutPage = () => {
  const { totalPrice } = useCartProducts();
  return (
    <>
      <Navbar shadow />
      <Background>
        <Wrapper center>
          <Grid>
            <Grid.Cell width={2 / 3} mobile={1} tablet={1}>
              <Cart />
            </Grid.Cell>
            <Grid.Cell width={1 / 3} mobile={1} tablet={1}>
              <h1>Total: {totalPrice}</h1>
              <button type="button">Checkout</button>
            </Grid.Cell>
          </Grid>
        </Wrapper>
      </Background>
      <Footer />
    </>
  );
};

export default CheckoutPage;

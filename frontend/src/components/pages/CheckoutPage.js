import React from 'react';

import Footer from 'components/Footer';
import { Background } from 'elements/Background';

import { Wrapper } from 'elements/Wrapper';

import Cart from '../cart/Cart';
import Navbar from '../Navbar';

const CheckoutPage = () => {
  return (
    <>
      <Navbar shadow />
      <Background>
        <Wrapper center>
          <Cart />
        </Wrapper>
      </Background>
      <Footer />
    </>
  );
};

export default CheckoutPage;

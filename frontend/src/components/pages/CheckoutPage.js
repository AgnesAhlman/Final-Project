import { AllPosterWrapper } from 'elements/AllPosterWrapper';
import React from 'react';
import Cart from '../cart/Cart';
import Navbar from '../Navbar';

const CheckoutPage = () => {
  return (
    <AllPosterWrapper center>
      <Navbar shadow />

      <Cart />
    </AllPosterWrapper>
  );
};

export default CheckoutPage;

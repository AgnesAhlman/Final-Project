import React from 'react';
// import { useSelector } from 'react-redux';

import Posters from '../Posters';

import { GridContainer } from '../styles/Grid';

import Navbar from '../../blocks/Navbar';

const AllPostersPage = () => {
  // const products = useSelector((store) => store.cartRed.items);
  return (
    <>
      <Navbar>
        <Navbar.Links to="/">Home</Navbar.Links>
        <Navbar.Links to="/CheckoutPage">
          <Navbar.Icon src="cartIcon.svg" alt="cartIcon" />
        </Navbar.Links>
      </Navbar>

      <GridContainer>
        <Posters />
      </GridContainer>
    </>
  );
};

export default AllPostersPage;

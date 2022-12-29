import React from 'react';
// import { useSelector } from 'react-redux';

import Posters from '../Posters';

import { GridContainer } from '../styles/Grid';
import Links from '../../elements/Links';
import Navbar from '../../blocks/Navbar';

const AllPostersPage = () => {
  // const products = useSelector((store) => store.cartRed.items);
  return (
    <>
      <Navbar>
        <Links to="/">Home</Links>
        <Links to="/checkout">
          <Navbar.Icon src="cartIcon.svg" alt="cartIcon" />
        </Links>
      </Navbar>

      <GridContainer>
        <Posters />
      </GridContainer>
    </>
  );
};

export default AllPostersPage;

import React from 'react';
// import { useSelector } from 'react-redux';

import Posters from '../Posters';

import { GridContainer } from '../styles/Grid';
import Links from '../../elements/Links';
import Navbar from '../../blocks/Navbar';
import { AllPosterWrapper, Background } from '../styles/Containers';

const AllPostersPage = () => {
  // const products = useSelector((store) => store.cartRed.items);
  return (
    <>
      <Navbar shadow>
        <Links to="/">Home</Links>
        <Links to="/checkout">
          <Navbar.Icon src="cartIcon.svg" alt="cartIcon" />
        </Links>
      </Navbar>
      <AllPosterWrapper>
        <Background>
          <h1>POSTERS</h1>
          <GridContainer>
            <Posters />
          </GridContainer>
        </Background>
      </AllPosterWrapper>
    </>
  );
};

export default AllPostersPage;

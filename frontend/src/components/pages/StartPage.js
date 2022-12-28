import React from 'react';

import Header from '../../blocks/Header';
import Navbar from '../../blocks/Navbar';

import { Wrapper } from '../styles/Containers';

const StartPage = () => {
  return (
    <Wrapper>
      <Header>
        <Navbar>
          <Navbar.Links to="/PosterPage">About</Navbar.Links>
          <Navbar.Links to="/PosterPage">Posters</Navbar.Links>
          <Navbar.Links to="/CheckoutPage">
            <Navbar.Icon src="cartIcon.svg" alt="cartIcon" />
          </Navbar.Links>
        </Navbar>
        <Header.LogoContainer>
          <img src="logo.png" alt="logo" />
        </Header.LogoContainer>
      </Header>
    </Wrapper>
  );
};

export default StartPage;

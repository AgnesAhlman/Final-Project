import React from 'react';

import Header from '../../blocks/Header';
import Navbar from '../../blocks/Navbar';
import Links from '../../elements/Links';

import { Wrapper } from '../styles/Containers';

const StartPage = () => {
  return (
    <Wrapper>
      <Header>
        <Navbar primary>
          <Links to="/posters">About</Links>
          <Links to="/posters">Posters</Links>
          <Links to="/checkout">
            <Navbar.Icon src="cartIcon.svg" alt="cartIcon" />
          </Links>
        </Navbar>
        <Header.LogoContainer>
          <img src="logo.png" alt="logo" />
        </Header.LogoContainer>
      </Header>
    </Wrapper>
  );
};

export default StartPage;

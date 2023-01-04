import { Wrapper } from 'elements/Wrapper';
import React from 'react';

import Header from '../../blocks/Header';
import Navbar from '../Navbar';

const StartPage = () => {
  return (
    <Wrapper>
      <Header>
        <Navbar primary />
        <Header.LogoContainer>
          <img src="logo.png" alt="logo" />
        </Header.LogoContainer>
      </Header>
    </Wrapper>
  );
};

export default StartPage;

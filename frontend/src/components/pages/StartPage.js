import { Wrapper } from 'elements/Wrapper';
import React from 'react';

import Header from '../../blocks/Header';
import Navbar from '../Navbar';

const StartPage = () => {
  return (
    <>
      <Navbar shadow />
      <Wrapper>
        <Header>
          <Header.LogoContainer>
            <img src="logo.png" alt="logo" />
          </Header.LogoContainer>
        </Header>
      </Wrapper>
    </>
  );
};

export default StartPage;

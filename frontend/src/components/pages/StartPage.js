import Grid from 'blocks/Grid';
import Footer from 'components/Footer';
import { Wrapper } from 'elements/Wrapper';
import React from 'react';

import Header from '../../blocks/Header';
import Navbar from '../Navbar';

const StartPage = () => {
  return (
    <>
      <Navbar shadow />
      <Header>
        <Wrapper>
          <Grid justify="flex-end" align="center">
            <Grid.Cell width={1 / 3} justify="center" align="center">
              <img src="logo.svg" alt="logo" width="200" />
            </Grid.Cell>
          </Grid>
        </Wrapper>
      </Header>
      <Footer />
    </>
  );
};

export default StartPage;

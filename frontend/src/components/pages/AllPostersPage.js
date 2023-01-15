import Footer from 'components/Footer';
import { AllPosterWrapper } from 'elements/AllPosterWrapper';
import { Background } from 'elements/Background';
import { Grid } from 'elements/Grid';

import React from 'react';
import Navbar from '../Navbar';
import Posters from '../Posters';

const AllPostersPage = () => {
  return (
    <>
      <Navbar shadow />
      <AllPosterWrapper center>
        <Background column big>
          <h1>POSTERS</h1>
          <Grid>
            <Posters />
          </Grid>
        </Background>
        <Footer />
      </AllPosterWrapper>
    </>
  );
};

export default AllPostersPage;

import LoginRegister from 'blocks/LoginRegister';
import { Wrapper } from 'elements/Wrapper';
import React from 'react';
import { useSelector } from 'react-redux';
import { Background } from 'elements/Background';
import Grid from 'blocks/Grid';
import Navbar from '../Navbar';

import Form from '../Form';

const Register = () => {
  const errorMessage = useSelector((store) => store.user.error);
  return (
    <>
      <Navbar shadow />
      <Background padding="10rem">
        <Wrapper center bgColor="white">
          <Grid align="center">
            <Grid.Cell align="center" width={1 / 2}>
              <LoginRegister>
                <div>
                  <Form mode="Register" />
                </div>
              </LoginRegister>
            </Grid.Cell>
            <Grid.Cell width={1 / 2} justify="center" align="center">
              <img src="logo.svg" alt="logo" width="200" />
            </Grid.Cell>
          </Grid>
          <p>{errorMessage}</p>
        </Wrapper>
      </Background>
    </>
  );
};
export default Register;

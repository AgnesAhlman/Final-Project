import LoginRegister from 'blocks/LoginRegister';
import { Wrapper } from 'elements/Wrapper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from 'blocks/LoginRegister/FormContainer';
import Grid from 'blocks/Grid';
import { Background } from 'elements/Background';

import Navbar from '../Navbar';

import Form from '../Form';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const errorMessage = useSelector((store) => store.user.error);

  useEffect(() => {
    if (user?.accessToken) {
      navigate('/posters');
    }
  }, [user?.accessToken, dispatch, navigate]);

  return (
    <>
      <Navbar shadow />
      <Background padding="10rem">
        <Wrapper center bgColor="white">
          <Grid align="center" boxShadow>
            <Grid.Cell align="center" width={1 / 2}>
              <LoginRegister>
                <FormContainer>
                  <h1>Welcome!</h1>
                  <div>
                    <Form mode="login" className="form-container" />
                  </div>
                  <div>
                    <LoginRegister.Button
                      border
                      textColor
                      type="button"
                      onClick={() => navigate('/register')}
                      className="form-container"
                    >
                      SIGN UP
                    </LoginRegister.Button>
                  </div>
                </FormContainer>
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

export default LogIn;

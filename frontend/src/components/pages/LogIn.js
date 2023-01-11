import LoginRegister from 'blocks/LoginRegister';
import { Wrapper } from 'elements/Wrapper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
      <Wrapper>
        <LoginRegister>
          <div>
            <h1>Welcome back! </h1>
            <p>Sign in:</p>
            <Form mode="login" />
          </div>

          <div>
            <h1> New? </h1>
            <p>No problem just register:</p>
            <Form mode="register" />
          </div>
        </LoginRegister>
        <p>{errorMessage}</p>
      </Wrapper>
    </>
  );
};

export default LogIn;

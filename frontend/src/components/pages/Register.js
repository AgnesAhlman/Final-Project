import LoginRegister from 'blocks/LoginRegister';
import { Wrapper } from 'elements/Wrapper';
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';

import Form from '../Form';

const Register = () => {
  const errorMessage = useSelector((store) => store.user.error);
  return (
    <>
      <Navbar shadow />
      <Wrapper>
        <LoginRegister>
          <div>
            <Form mode="Register" />
          </div>
        </LoginRegister>
        <p>{errorMessage}</p>
      </Wrapper>
    </>
  );
};
export default Register;

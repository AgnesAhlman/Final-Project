import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from '../Form';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (user?.accessToken) {
      navigate('/posters');
    }
  }, [user?.accessToken, dispatch, navigate]);

  return (
    <>
      <p>Login:</p>
      <Form mode="login" />

      <p>Register:</p>
      <Form mode="register" />
    </>
  );
};

export default LogIn;

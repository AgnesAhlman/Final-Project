import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from '../Form';

const LogIn = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

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

// if (localStorage.getItem('username') && localStorage.getItem('password')) {
//     // Återställ sessionen
//     console.log('Welcome back, ' + localStorage.getItem('username') + '!');
//   } else {
//     // Be användaren att logga in igen
//     console.log('Please log in to continue.');
//   }

import LoginRegister from 'blocks/LoginRegister';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'reducers/user';
import Button from 'blocks/LoginRegister/Button';

const Form = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn(props.mode, username, password));
  };

  return (
    <LoginRegister.Form onSubmit={onFormSubmit}>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </label>
      <Button bgColor type="submit">
        {props.mode === 'login' ? 'SIGN IN' : 'SIGN UP'}
      </Button>
    </LoginRegister.Form>
  );
};

export default Form;

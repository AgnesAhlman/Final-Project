import LoginRegister from 'blocks/LoginRegister';
import Button from 'elements/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'reducers/user';
import { VscKey } from 'react-icons/vsc';

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
        <LoginRegister.InputContainer>
          <img src="/user.svg" alt="user-icon" />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </LoginRegister.InputContainer>
      </label>
      <label htmlFor="password">
        <LoginRegister.InputContainer>
          <VscKey />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </LoginRegister.InputContainer>
      </label>
      <Button primary type="submit" margin="2rem">
        {props.mode === 'login' ? 'SIGN IN' : 'SIGN UP'}
      </Button>
    </LoginRegister.Form>
  );
};

export default Form;

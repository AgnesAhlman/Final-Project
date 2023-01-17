import styled from 'styled-components/macro';

import Form from './Form';
import Button from './Button';

const LoginRegister = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-width: 20rem;
  min-height: 30rem;

  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
  }
`;

LoginRegister.Form = Form;
LoginRegister.Button = Button;

export default LoginRegister;

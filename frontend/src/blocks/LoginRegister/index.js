import styled from 'styled-components/macro';

import Form from './Form';
import InputContainer from './InputContainer';

const LoginRegister = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-width: 20rem;
  min-height: 30rem;

  gap: 2rem;
`;

LoginRegister.Form = Form;
LoginRegister.InputContainer = InputContainer;

export default LoginRegister;

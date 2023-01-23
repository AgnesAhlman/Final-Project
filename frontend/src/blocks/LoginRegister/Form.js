import styled from 'styled-components/macro';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  label {
    width: 100%;
    font-size: 1.2rem;
  }

  p.error {
    width: 100%;
    color: red;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

export default Form;

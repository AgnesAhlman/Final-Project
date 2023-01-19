import styled from 'styled-components/macro';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  input,
  textarea {
    background-color: #e8e7e7;
    padding: 1rem;
    width: 15rem;
    margin-bottom: 2rem;
    border-width: 0px;
  }

  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p.error {
    color: red;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

export default Form;

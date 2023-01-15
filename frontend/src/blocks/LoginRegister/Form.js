import styled from 'styled-components/macro';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input,
  textarea {
    background-color: #e8e7e7;
    padding: 1rem;
    width: 15rem;
    margin-bottom: 2rem;
    border-width: 2px;
  }
`;

export default Form;

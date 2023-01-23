import styled from 'styled-components/macro';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;

  input,
  textarea {
    padding: 1rem;
    width: 100%;
    min-width: 15rem;
    border-width: 0px;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    outline: none;
  }

  && img,
  && svg {
    width: 2rem;
  }
`;

export default InputContainer;

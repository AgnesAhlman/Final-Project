import styled from 'styled-components/macro';

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;

  && button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

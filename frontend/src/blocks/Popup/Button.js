import styled from 'styled-components/macro';

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;

  && button {
    width: 48px;
    height: 48px;

    border: none;
    background-color: transparent;
    cursor: pointer;

    & svg {
      height: 18px;
      width: 18px;
    }
  }
`;

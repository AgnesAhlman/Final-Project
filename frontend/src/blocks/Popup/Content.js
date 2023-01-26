import styled from 'styled-components/macro';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40%;
  min-height: 50%;
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;

  && p {
    width: 50ch;
    text-align: center;
    margin-top: 2rem;
  }
`;

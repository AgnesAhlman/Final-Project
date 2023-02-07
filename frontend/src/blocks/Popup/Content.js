import styled from 'styled-components/macro';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  max-width: 90%;
  border-radius: 0.5rem;

  && h1 {
    text-align: center;
  }

  && p {
    width: 50ch;
    max-width: 100%;
    text-align: center;
    margin-top: 2rem;
    padding: 0 4rem 2rem;

    @media (max-width: 667px) {
      padding: 0 1rem 1rem;
    }
  }
`;

import styled from 'styled-components/macro';

export const Text = styled.p`
  font-size: 1.06rem;
  width: 71ch;
  max-width: 100%;
  line-height: 1.3rem;
  font-family: 'Nunito Sans', sans-serif;
  padding: 5rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

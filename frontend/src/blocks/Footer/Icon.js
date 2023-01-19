import styled from 'styled-components/macro';

export const Icon = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 75%;
  }

  @media (max-width: 576px) {
    max-width: 18px;
    height: 18px;
  }
`;

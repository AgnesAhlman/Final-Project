import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 667px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

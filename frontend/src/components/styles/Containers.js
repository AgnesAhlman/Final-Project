import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: calc(100vw - 1rem * 2); */
  min-height: 100vh;
  background-color: var(--main-bg-color);
  padding: 1rem;
`;

export const PosterContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;

  background-color: var(--main-bg-color);
  padding: 3rem;
`;

export const AllPosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-bg-color);
`;

export const Background = styled.div`
  display: flex;
  background-color: white;
  margin-top: 10rem;
  flex-direction: column;
  align-items: center;
  padding: 0rem 10rem 0rem 10rem;
  background-color: white;

  h1 {
    padding: 5rem;
  }
`;

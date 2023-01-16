import styled from 'styled-components/macro';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor || 'var(--main-bg-color)'};
  width: 100%;

  h1 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 200;
    margin: 5rem;
  }

  p {
    margin-bottom: 5rem;
    text-align: center;
  }
`;

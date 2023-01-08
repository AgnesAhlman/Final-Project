import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10rem;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: center;
  /* padding: 0rem 10rem 0rem 10rem; */
  background-color: white;
  max-width: 60rem;

  h1 {
    padding: 5rem;
  }
`;

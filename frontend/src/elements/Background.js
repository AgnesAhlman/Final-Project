import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10rem;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: center;
  background-color: white;
  width: 80%;

  h1 {
    padding: 5rem;
  }
`;

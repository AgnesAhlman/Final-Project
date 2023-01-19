import styled from 'styled-components/macro';

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  && p {
    width: 100%;
    text-align: center;
  }
`;

export default Empty;

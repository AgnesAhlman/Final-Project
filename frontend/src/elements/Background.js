import styled from 'styled-components/macro';

export const Background = styled.div`
  background-color: var(--main-bg-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${(props) => props.padding};
  padding-bottom: ${(props) => props.padding};
`;

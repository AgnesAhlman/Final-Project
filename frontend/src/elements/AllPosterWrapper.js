import styled from 'styled-components';

export const AllPosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  background-color: var(--main-bg-color);
  min-height: 100vh;
`;

import styled from 'styled-components/macro';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor || 'var(--main-bg-color)'};
  width: 100%;
`;

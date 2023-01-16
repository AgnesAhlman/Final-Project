import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor || 'transparent'};
  max-width: 1024px;
  width: 100%;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
    width: 100%;
  }
`;

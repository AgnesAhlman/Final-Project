import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor || 'transparent'};
  max-width: 1024px;
  width: calc(100% - 10rem);
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
    width: calc(100% - 4rem);
  }
`;

import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor || 'transparent'};
  max-width: 1024px;
  width: 100%;
  padding: ${(props) => props.padding};
  margin-top: ${(props) => (props.margin ? 'var(--main-navbar-margin)' : '0')};

  @media (max-width: 768px) {
    padding: 0 2rem;
    width: 100%;
    margin-top: 0%;
  }
`;

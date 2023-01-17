import styled from 'styled-components/macro';

export const Cell = styled.div`
  width: ${(props) => props.width * 100}%;
  background-color: ${(props) => props.bgColor || 'transparent'};

  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  display: flex;
  padding: ${(props) => props.padding};
  align-self: ${(props) => props.alignSelf || 'unset'};

  @media (max-width: 992px) {
    width: ${(props) => (props.tablet ? props.tablet * 100 : 100)}%;
  }

  @media (max-width: 576px) {
    width: ${(props) => (props.mobile ? props.mobile * 100 : 100)}%;
  }
`;

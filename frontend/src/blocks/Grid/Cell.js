import styled from 'styled-components/macro';

export const Cell = styled.div`
  width: ${(props) => props.width * 100}%;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  display: flex;

  @media (max-width: 992px) {
    width: ${(props) => (props.tablet ? props.tablet * 100 : 100)}%;
  }

  @media (max-width: 576px) {
    width: ${(props) => (props.mobile ? props.mobile * 100 : 100)}%;
  }
`;
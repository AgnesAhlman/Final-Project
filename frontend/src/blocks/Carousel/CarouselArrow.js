import styled from 'styled-components/macro';

export const CarouselArrow = styled.button`
  background: transparent;
  position: absolute;
  height: 48px;
  top: calc(50% - 24px);
  border: 0;
  z-index: 1;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};

  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  ${(props) => props.left && 'left: -32px;'}
  ${(props) => props.right && 'right: -32px;'}
`;

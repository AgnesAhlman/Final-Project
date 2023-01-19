import styled from 'styled-components/macro';

export const CarouselIndicator = styled.button`
  border-radius: ${(props) => (props.isSelected ? '14px' : '12px')};
  width: ${(props) => (props.isSelected ? '14px' : '12px')};
  height: ${(props) => (props.isSelected ? '14px' : '12px')};
  border: none;
  transition: all 0.2s;
  background-color: ${(props) => (props.isSelected ? '#8da0a9' : '#607d8b')};
  margin: 0 0.2rem;
  position: relative;
  top: ${(props) => (props.isSelected ? '27px' : '26px')};

  @media (max-width: 667px) {
    display: none;
  }
`;

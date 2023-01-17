import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.bgColor ? 'green' : 'transparent')};
  color: ${(props) => (props.textColor ? 'green' : 'white')};
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  margin: 0rem;
  cursor: pointer;
  border-radius: 2rem;
  border: ${(props) => (props.border ? '1px solid green' : 'none')};
  min-width: 150px;

  &:hover {
    background-color: light-grey;
  }
`;
export default Button;

import styled from 'styled-components/macro';

const Button = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.bgColor || 'transparent'};
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0rem;
  color: white;
  cursor: pointer;
`;

export default Button;

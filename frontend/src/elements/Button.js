import styled from 'styled-components/macro';

const Button = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 1rem;
  border: none;
  min-height: 36px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? 'black' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: ${(props) => (props.primary ? 'none' : '1px solid black')};
  margin-top: ${(props) => props.margin};

  &:hover {
    background-color: #343434;
    color: white;
  }

  img {
    filter: invert(1);
    max-width: 2rem;
  }
`;

export default Button;

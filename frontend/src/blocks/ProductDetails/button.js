import styled from 'styled-components/macro';

const Button = styled.button`
  width: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 1rem;
  border: none;
  margin: 2rem 0;
  cursor: pointer;

  &:hover {
    background-color: #343434;
  }

  img {
    filter: invert(1);
    max-width: 2rem;
  }
`;

export default Button;

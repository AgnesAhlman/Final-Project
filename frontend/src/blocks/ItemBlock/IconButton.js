import styled from 'styled-components/macro';

const IconButton = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  color: grey;

  & > img {
    width: 24px;
  }
`;

export default IconButton;

import styled from 'styled-components/macro';

const RoomImg = styled.img`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;

  opacity: 0;
  transition: all 0.4s;

  &:hover {
    opacity: 1;
    transition: 0.3 ease-in-out;
  }
`;

export default RoomImg;

import styled from 'styled-components';

import Image from './Image';
import RoomImg from './RoomImg';

const PosterContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 2rem;

  article {
    display: flex;
    position: relative;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

PosterContent.Image = Image;
PosterContent.RoomImg = RoomImg;

export default PosterContent;

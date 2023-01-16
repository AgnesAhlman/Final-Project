import styled from 'styled-components/macro';

import Image from './Image';
import RoomImg from './RoomImg';
import InfoContainer from './InfoContainer';

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
PosterContent.InfoContainer = InfoContainer;

export default PosterContent;

import styled from 'styled-components';

import Image from './Image';

const PosterContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

PosterContent.Image = Image;

export default PosterContent;

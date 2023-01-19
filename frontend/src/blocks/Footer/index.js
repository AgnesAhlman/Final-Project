import styled from 'styled-components/macro';

import { Icon } from './Icon';

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a39387;
  color: black;
  padding: 2rem;
  width: 100%;

  img {
    width: 8rem;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

StyledFooter.Icon = Icon;

export default StyledFooter;

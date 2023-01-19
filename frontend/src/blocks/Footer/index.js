import styled from 'styled-components/macro';

import { Icon } from './Icon';
import { Logo } from './Logo';

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a39387;
  color: black;
  padding: 2rem;
  width: 100%;

  p {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

StyledFooter.Icon = Icon;
StyledFooter.Logo = Logo;

export default StyledFooter;

import styled from 'styled-components/macro';

import { Icon } from './Icon';

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #353535;
  color: white;
  padding: 2rem;
  width: 100%;

  img {
    width: 8rem;
  }
`;

StyledFooter.Icon = Icon;

export default StyledFooter;

import styled from 'styled-components';

import Links from './Links';
import Icon from './Icon';

const Navbar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem;
  width: calc(100% - 2rem);
`;

Navbar.Links = Links;
Navbar.Icon = Icon;

export default Navbar;

import styled from 'styled-components/macro';

import Icon from './Icon';
import UserIcon from './UserIcon';

const Navbar = styled.div`
  position: ${(props) => (props.primary ? 'absolute' : 'fixed')};
  background-color: ${(props) => (props.primary ? 'none' : '#eceeeb')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem;
  width: calc(100% - 2rem);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-shadow: ${(props) => {
    return props.shadow ? 'rgba(0, 0, 0, 0.11) 0px 3px 8px;' : 'none';
  }};
  z-index: 1;
`;

Navbar.Icon = Icon;
Navbar.UserIcon = UserIcon;

export default Navbar;

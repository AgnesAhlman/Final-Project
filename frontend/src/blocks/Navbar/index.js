/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

import Icon from './Icon';

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
  box-shadow: ${(props) =>
    props.shadow ? 'rgba(0, 0, 0, 0.11) 0px 3px 8px;' : 'none'};
`;

Navbar.Icon = Icon;

export default Navbar;

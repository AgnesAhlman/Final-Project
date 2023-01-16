import React, { useState } from 'react';

import Links from 'elements/Links';
import useWindowSize from 'hooks/useWindowSize';
import { MenuIcon, MenuLinks } from 'blocks/Hamburger/index.js';
import StyledNavbar from '../blocks/Navbar';

const Dropdown = () => {
  const [nav, setNav] = useState(false);
  const { showDropdown } = useWindowSize();

  return (
    <div className={showDropdown ? 'show' : 'hide'}>
      <MenuIcon
        showDropdown={showDropdown}
        nav={nav}
        onClick={() => {
          setNav(!nav);
        }}
      >
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks showDropdown={showDropdown} nav={nav}>
        <ul>
          <li>
            <Links to="/">Home</Links>
          </li>
          <li>
            <Links to="/posters">Posters</Links>
          </li>
          <li>
            <Links to="/login">
              <StyledNavbar.UserIcon src="/user.svg" alt="user-icon" />
            </Links>
          </li>
          <li>
            <Links to="/checkout">
              <StyledNavbar.Icon src="/cartIcon.svg" alt="cartIcon" />
            </Links>
          </li>
        </ul>
      </MenuLinks>
    </div>
  );
};

export default Dropdown;

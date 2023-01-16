import React from 'react';
import useCartProducts from 'hooks/useCartProducts';

import useWindowSize from 'hooks/useWindowSize';
import Links from '../elements/Links';
import StyledNavbar from '../blocks/Navbar';
import Dropdown from './Dropdown';

const Navbar = (props) => {
  const { isMobile } = useWindowSize();
  const { totalCartItems } = useCartProducts();
  return (

    <StyledNavbar shadow={props.shadow} primary={props.primary}>
      {isMobile ? (
        <Dropdown />
      ) : (
        <>
          <Links to="/">Home</Links>
          <Links to="/posters">Posters</Links>
          <Links to="/login">
            <StyledNavbar.UserIcon src="/user.svg" alt="user-icon" />
          </Links>
          <Links to="/checkout" badge={totalCartItems}>
            <StyledNavbar.Icon src="/cartIcon.svg" alt="cartIcon" />
          </Links>
        </>
      )}
    </StyledNavbar>

  );
};

export default Navbar;

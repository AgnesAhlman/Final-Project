import React, { useState } from 'react';
import useCartProducts from 'hooks/useCartProducts';

import Links from '../elements/Links';
import StyledNavbar from '../blocks/Navbar';
import Dropdown from './Dropdown';
import CartCard from './pages/CartCard';

const Navbar = (props) => {
  const { totalCartItems, cartProducts } = useCartProducts();
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <Dropdown />
      <StyledNavbar shadow={props.shadow} primary={props.primary}>
        <Links to="/">Home</Links>
        <Links to="/posters">Posters</Links>
        <Links to="/login">
          <StyledNavbar.UserIcon src="/user.svg" alt="user-icon" />
        </Links>
        <Links
          to="/checkout"
          badge={totalCartItems}
          onMouseEnter={() => setShowCard(true)}
          onMouseLeave={() => setShowCard(false)}
        >
          <StyledNavbar.Icon src="/cartIcon.svg" alt="cartIcon" />
          {showCard && <CartCard products={cartProducts} />}
        </Links>
      </StyledNavbar>
    </>
  );
};

export default Navbar;

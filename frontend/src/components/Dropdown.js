/* eslint-disable prettier/prettier */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Links from 'elements/Links';
import StyledNavbar from '../blocks/Navbar';

const MenuIcon = styled.button`
  display: ${({ showDropdown }) => (showDropdown ? 'flex' : 'none')};
  position: fixed;
  top: 1.3rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 6;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const MenuLinks = styled.nav`
  display: ${({ showDropdown }) => (showDropdown ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: #d7d7d7;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(100%)')};
  @media (max-width: 769px) {
    display: flex;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 300ms;

    :hover {
      color: #6ab4ff;
    }
  }
`;

const Dropdown = () => {
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  if (!showDropdown) return null;

  return (
    <div className={showDropdown ? 'show' : 'hide'}>
      <MenuIcon
        showDropdown={showDropdown}
        nav={nav}
        onClick={() => {
          console.log('MenuIcon Clicked');
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

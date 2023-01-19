import styled from 'styled-components';

export const MenuIcon = styled.button`
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
  z-index: 15;

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

export const MenuLinks = styled.nav`
  display: ${({ showDropdown }) => (showDropdown ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: var(--main-bg-color);
  position: fixed;
  top: 0rem;
  right: 0;
  z-index: 10;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(100%)')};
  @media (max-width: 769px) {
    display: flex;
  }

  ul {
    list-style-type: none;
    padding: 0;
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
  .hidden {
    display: none;
  }
`;

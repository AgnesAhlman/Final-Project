import styled from 'styled-components/macro';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('heroImg.jpg');
  background-size: cover;
  width: 100%;
  background-position-x: center;

  @media (max-width: 768px) {
    background-position-x: right;
  }
`;

export default Header;

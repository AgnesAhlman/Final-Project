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

  @media (max-width: 1200px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    background-position-x: -400px;
  }
`;

export default Header;

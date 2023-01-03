import styled from 'styled-components';

import LogoContainer from './LogoContainer';

const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  min-height: 90vh;
  background-image: url('headerImage.jpg');
  background-size: cover;
  width: 100%;
`;

Header.LogoContainer = LogoContainer;

export default Header;

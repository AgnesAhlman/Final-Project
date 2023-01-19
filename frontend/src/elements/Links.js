import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Links = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;

  ${(props) =>
    props.badge &&
    `
    &:after {
      background-color: black;
      color: white;
      position: absolute;
      padding: 3px;
      right: -10px;
      top: 12px;
      border-radius: 16px;
      width: 16px;
      height: 16px;
      font-size: 10px;
      text-align: center;
      line-height: 10px;
      font-weight: 800;
      content: '${props.badge}';
    }
  
  `}
`;

export default Links;

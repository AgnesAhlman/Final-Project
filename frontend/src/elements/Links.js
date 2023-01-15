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
      background-color: #e8ba8c;
      color: white;
      position: absolute;
      padding: 2px;
      right: -10px;
      top: 12px;
      border-radius: 10px;
      width: 14px;
      height: 14px;
      font-size: 10px;
      text-align: center;
      line-height: 14px;
      font-weight: 800;
      content: '${props.badge}';
    }
  
  `}
`;

export default Links;

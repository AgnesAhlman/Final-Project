import styled from 'styled-components/macro';
import PriceContainer from './PriceContainer';
import Button from './Button';
import IconButton from './IconButton';
import Icon from './Icon';

const ItemBlock = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  background-color: white;
  width: 95%;
  padding: 2rem;
  margin-top: 2rem;

  & img {
    max-width: 100%;
  }
`;

ItemBlock.PriceContainer = PriceContainer;
ItemBlock.Button = Button;
ItemBlock.IconButton = IconButton;
ItemBlock.Icon = Icon;

export default ItemBlock;

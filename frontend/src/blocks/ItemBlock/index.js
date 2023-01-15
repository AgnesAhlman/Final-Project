import styled from 'styled-components/macro';

import Img from './Img';
import Button from './Button';
import PriceContainer from './PriceContainer';

const ItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 2rem;
  margin-top: 2rem;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      max-width: 1rem;
    }
  }

  img {
    max-width: 10rem;
  }
`;

ItemBlock.Img = Img;
ItemBlock.Button = Button;
ItemBlock.PriceContainer = PriceContainer;

export default ItemBlock;

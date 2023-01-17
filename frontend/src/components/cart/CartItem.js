import Grid from 'blocks/Grid';
import ItemBlock from 'blocks/ItemBlock';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../reducers/cart';

const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <ItemBlock>
      <Grid>
        <Grid.Cell width={1 / 3}>
          <img src={props.product.img} alt="" />
        </Grid.Cell>
        <Grid.Cell
          width={2 / 3}
          padding="1rem"
          alignSelf="stretch"
          justify="space-between"
        >
          <div>
            <h4>{props.product.title}</h4>
            <span>Quantity: {props.product.quantity} </span>
            <ItemBlock.IconButton
              type="button"
              onClick={() => dispatch(addToCart(props.product))}
            >
              + <span> Add Item</span>
            </ItemBlock.IconButton>
          </div>
          <ItemBlock.PriceContainer>
            <span>{props.product.price * props.product.quantity}:-</span>
          </ItemBlock.PriceContainer>
          <ItemBlock.IconButton
            type="button"
            onClick={() => dispatch(removeFromCart(props.product))}
          >
            <ItemBlock.Icon src="/trashcan.svg" alt="trashcan-icon" />
            <span>Remove Item</span>
          </ItemBlock.IconButton>
        </Grid.Cell>
      </Grid>
    </ItemBlock>
  );
};

export default CartItem;

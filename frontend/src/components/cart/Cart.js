import EmptyCart from 'blocks/EmptyCart';
import Grid from 'blocks/Grid';
import ItemBlock from 'blocks/ItemBlock';
import { Popup } from 'blocks/Popup';
import Button from 'elements/Button';
import useCartProducts from 'hooks/useCartProducts';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import CartItem from './CartItem';

const Cart = () => {
  const [popup, setPopup] = useState(false);
  const { cartProducts, cartItems, totalCartItems, totalPrice } =
    useCartProducts();
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  if (!cartItems.length) {
    return (
      <EmptyCart>
        <h1>Shopping Cart ({totalCartItems})</h1>
        <p>Oh the cart is empty! :(</p>
      </EmptyCart>
    );
  }

  const handleOnClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      setPopup(true);
    }
  };

  return (
    <>
      <h1>Shopping Cart ({totalCartItems})</h1>
      <Grid>
        <Grid.Cell width={2 / 3}>
          {cartProducts.map((product) => (
            <CartItem product={product} key={product._id} />
          ))}
        </Grid.Cell>
        <Grid.Cell width={1 / 3}>
          <ItemBlock column>
            <h1>Total </h1>
            <p>{totalPrice} kr</p>
            <Button primary type="button" onClick={() => handleOnClick()}>
              ORDER
            </Button>
          </ItemBlock>
        </Grid.Cell>
      </Grid>
      {popup && (
        <Popup>
          <Popup.Content>
            <Popup.Button>
              <button type="button" onClick={() => setPopup(false)}>
                <FaTimes />
              </button>
            </Popup.Button>
            <h1> Soon ready! </h1>
            <p>
              The posters are not yet quite ready for ordering; please check
              back in a couple of weeks to order your posters.
            </p>
          </Popup.Content>
        </Popup>
      )}
    </>
  );
};

export default Cart;

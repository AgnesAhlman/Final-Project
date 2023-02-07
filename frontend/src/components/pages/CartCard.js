import CartCardContainer from 'blocks/DropDownCart';
import useCartProducts from 'hooks/useCartProducts';
import React from 'react';

const CartCard = () => {
  // const allProducts = useSelector((store) => store.products.items);
  const { totalPrice, cartProducts } = useCartProducts();

  return (
    <CartCardContainer>
      <h3>Your Cart</h3>
      {cartProducts.length ? (
        <CartCardContainer.Container>
          {cartProducts.map((cartProduct) => {
            return (
              <CartCardContainer.Product>
                <img key={cartProduct._id} src={cartProduct.img} alt="" />

                <p> {cartProduct.quantity} </p>
                <p>{cartProduct.price} kr</p>
              </CartCardContainer.Product>
            );
          })}
          <p>Total {totalPrice} kr</p>
        </CartCardContainer.Container>
      ) : (
        <CartCardContainer.Empty>
          <p>Oh the cart is empty!</p>
        </CartCardContainer.Empty>
      )}
    </CartCardContainer>
  );
};

export default CartCard;

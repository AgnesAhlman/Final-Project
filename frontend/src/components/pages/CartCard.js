import CartCardContainer from 'blocks/DropDownCart';
import useCartProducts from 'hooks/useCartProducts';
import React from 'react';

const CartCard = () => {
  // const allProducts = useSelector((store) => store.products.items);
  const { totalPrice, cartProducts } = useCartProducts();
  console.log('cartProduct', cartProducts);

  return (
    <CartCardContainer>
      <h3>Your Cart</h3>
      <CartCardContainer.Container>
        {cartProducts.map((cartProduct) => {
          console.log('cartProduct', cartProduct);

          return (
            <CartCardContainer.Product>
              <img key={cartProduct._id} src={cartProduct.img} alt="" />

              <p> {cartProduct.quantity}</p>
              <p>{cartProduct.price} kr</p>
            </CartCardContainer.Product>
          );
        })}
      </CartCardContainer.Container>
      <p>Total {totalPrice} kr</p>
    </CartCardContainer>
  );
};

export default CartCard;

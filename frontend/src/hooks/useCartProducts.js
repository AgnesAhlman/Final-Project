import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosters } from 'reducers/products';

const useCartProducts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const products = useSelector((store) => store.products.items);

  useEffect(() => {
    if (!products.length) {
      dispatch(getPosters());
    }
  }, [dispatch, products.length]);

  // Find products in the cart.
  const cartProducts = useMemo(() => {
    if (!products.length) {
      return [];
    }

    return (
      cartItems
        .map((cartItem) => {
          const product = products.find((p) => p._id === cartItem.posterId);
          if (!product) {
            return null;
          }

          return {
            ...product,
            quantity: cartItem.quantity
          };
        })
        // Filter out null
        .filter((item) => item)
    );
  }, [products, cartItems]);

  const totalPrice = useMemo(() => {
    return cartProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartProducts]);

  const totalCartItems = useMemo(() => {
    return cartProducts.reduce((total, item) => total + item.quantity, 0);
  }, [cartProducts]);

  return {
    products,
    totalCartItems,
    totalPrice,
    cartItems,
    cartProducts
  };
};

export default useCartProducts;

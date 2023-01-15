import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ProductDetails from 'blocks/ProductDetails';
import { addToCart } from 'reducers/cart';
import { Wrapper } from 'elements/Wrapper';
import { Background } from 'elements/Background';
import Grid from 'blocks/Grid';
import Navbar from '../Navbar';
import { getSinglePosters } from '../../reducers/products';

const SinglePosterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((store) => {
    return store.products.items.find((item) => item._id === id);
  });

  useEffect(() => {
    if (!product) {
      dispatch(getSinglePosters(id));
    }
  }, [dispatch, id, product]);

  if (!product) {
    // TODO loading state
    return null;
  }

  return (
    <>
      <Navbar shadow />
      <Background>
        <Wrapper bgColor="white">
          <Grid>
            <Grid.Cell
              justify="center"
              align="center"
              width={1 / 2}
              mobile={1}
              tablet={1 / 2}
            >
              <Carousel thumbWidth={60}>
                <div>
                  <img src={product.img} alt="" />
                </div>
                <div>
                  <img src={product.roomImg} alt="" />
                </div>
              </Carousel>
            </Grid.Cell>

            <Grid.Cell
              align="center"
              justify="center"
              width={1 / 2}
              tablet={1 / 2}
              mobile={1}
            >
              <ProductDetails>
                <h1>{product.title}</h1>
                <p>poster info text goes here</p>
                <ProductDetails.Button
                  type="button"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to cart
                  <img src="/cartIcon.svg" alt="cartIcon" />
                </ProductDetails.Button>
              </ProductDetails>
            </Grid.Cell>
          </Grid>
        </Wrapper>
      </Background>
    </>
  );
};

export default SinglePosterPage;

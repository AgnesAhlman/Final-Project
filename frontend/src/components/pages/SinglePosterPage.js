import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AllPosterWrapper } from 'elements/AllPosterWrapper';
import { Background } from 'elements/Background';

import { Carousel } from 'react-responsive-carousel';
import { Cell, Layout } from 'blocks/Layout';
import ProductDetails from 'blocks/ProductDetails';
import cartRed from 'reducers/cartRed';
import Navbar from '../Navbar';

import { getSinglePosters } from '../../reducers/products';
// import Poster from '../Poster';

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
    return null;
  }

  return (
    <AllPosterWrapper>
      <Navbar shadow />
      <Background>
        {/* <Poster product={product} /> */}
        <Layout>
          <Cell>
            <Carousel thumbWidth={60}>
              <div>
                <img src={product.img} alt="" />
              </div>
              <div>
                <img src={product.roomImg} alt="" />
              </div>
            </Carousel>
          </Cell>

          <Cell>
            <ProductDetails>
              <h1>{product.title}</h1>
              <p>poster info text goes here</p>
              <ProductDetails.Button
                type="button"
                onClick={() => dispatch(cartRed.actions.addItem(product))}
              >
                <img src="/cartIcon.svg" alt="cartIcon" />
                Add to cart
              </ProductDetails.Button>
            </ProductDetails>
          </Cell>
        </Layout>
      </Background>
    </AllPosterWrapper>
  );
};

export default SinglePosterPage;

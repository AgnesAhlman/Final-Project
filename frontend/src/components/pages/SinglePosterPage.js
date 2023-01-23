import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ProductDetails from 'blocks/ProductDetails';
import { addToCart } from 'reducers/cart';
import { Wrapper } from 'elements/Wrapper';
import { Background } from 'elements/Background';
import Grid from 'blocks/Grid';
import Footer from 'components/Footer';
import { CarouselIndicator } from 'blocks/Carousel/CarouselIndicator';
import { CarouselArrow } from 'blocks/Carousel/CarouselArrow';
import { ReactComponent as ChevronRight } from 'blocks/Carousel/chevron_right.svg';
import { ReactComponent as ChevronLeft } from 'blocks/Carousel/chevron_left.svg';
import { Alert } from 'elements/Alert';
import { BsCheck2Circle } from 'react-icons/bs';
import Navbar from '../Navbar';
import { getSinglePosters } from '../../reducers/products';

const SinglePosterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [showToast, setShowToast] = useState(false);

  const product = useSelector((store) => {
    return store.products.items.find((item) => item._id === id);
  });

  useEffect(() => {
    if (!product) {
      dispatch(getSinglePosters(id));
    }
  }, [dispatch, id, product]);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);

  if (!product) {
    // TODO loading state
    return null;
  }

  return (
    <>
      <Navbar shadow />
      <Background>
        <Wrapper bgColor="white" margin>
          <Grid align="stretch">
            <Grid.Cell
              justify="center"
              align="center"
              width={1 / 2}
              mobile={1}
              tablet={1 / 2}
              padding="2rem"
            >
              <Carousel
                showStatus={false}
                showThumbs={false}
                renderIndicator={(clickHandler, isSelected) => (
                  <CarouselIndicator
                    isSelected={isSelected}
                    onClick={clickHandler}
                    type="button"
                  />
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                  <CarouselArrow
                    type="button"
                    onClick={clickHandler}
                    right
                    disabled={!hasNext}
                  >
                    <ChevronRight width={32} />
                  </CarouselArrow>
                )}
                renderArrowPrev={(clickHandler, hasPrev) => (
                  <CarouselArrow
                    type="button"
                    onClick={clickHandler}
                    left
                    disabled={!hasPrev}
                  >
                    <ChevronLeft width={32} />
                  </CarouselArrow>
                )}
              >
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
              padding="2rem"
            >
              <ProductDetails>
                <div>
                  <h1>{product.title}</h1>
                  <div>
                    <h3>
                      <span>Size </span> {product.size}
                    </h3>
                    <h3>
                      <span>Price </span> {product.price} kr
                    </h3>
                  </div>
                </div>
                <div>
                  <p> {product.description}</p>
                  <ProductDetails.Button
                    type="button"
                    onClick={() => {
                      dispatch(addToCart(product));
                      setShowToast(true);
                    }}
                  >
                    Add to cart
                    <img src="/cartIcon.svg" alt="cartIcon" />
                  </ProductDetails.Button>
                </div>
              </ProductDetails>
              {showToast && (
                <Alert>
                  <BsCheck2Circle />
                  Item added to cart!
                </Alert>
              )}
            </Grid.Cell>
          </Grid>
        </Wrapper>
      </Background>
      <Footer />
    </>
  );
};

export default SinglePosterPage;

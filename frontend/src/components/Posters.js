import Grid from 'blocks/Grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosters } from '../reducers/products';

import Poster from './Poster';

const Posters = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.products.items);
  console.log('allproducts', allProducts);

  useEffect(() => {
    dispatch(getPosters());
  }, [dispatch]);

  return (
    <Grid>
      {allProducts.map((product) => (
        <Grid.Cell
          mobile={1}
          tablet={1 / 2}
          width={1 / 3}
          key={product._id}
          align="center"
        >
          <Poster product={product} />
        </Grid.Cell>
      ))}
    </Grid>
  );
};

export default Posters;

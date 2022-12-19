import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosters } from '../reducers/products';

import Poster from './Poster';

const Posters = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.products.items);

  useEffect(() => {
    dispatch(getPosters());
  }, [dispatch]);

  return (
    <>
      {allProducts.map((product) => (
        <Poster key={product.posterID} product={product} />
      ))}
    </>
  );
};

export default Posters;

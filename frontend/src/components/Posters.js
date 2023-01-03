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
    <>
      {allProducts.map((product) => (
        <div key={product._id}>
          <Poster product={product} />
        </div>
      ))}
    </>
  );
};

export default Posters;

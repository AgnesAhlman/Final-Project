import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSinglePosters } from '../../reducers/products';
import Poster from '../Poster';

// import { useDispatch } from 'react-redux';
// import { getSinglePosters } from '../../reducers/products';

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

  return (
    <div>
      <Poster product={product} />
    </div>
  );
};

export default SinglePosterPage;

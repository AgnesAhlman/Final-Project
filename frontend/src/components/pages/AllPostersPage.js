import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import Posters from '../Posters';

import { GridContainer } from '../styles/Grid';

const AllPostersPage = () => {
  const products = useSelector((store) => store.cartRed.items);
  return (
    <>
      <div>AllPostersPage</div>
      <Link to="/CheckoutPage">
        <FaShoppingBag />
      </Link>
      <p>{products.length}</p>
      <GridContainer>
        <Posters />
      </GridContainer>
    </>
  );
};

export default AllPostersPage;

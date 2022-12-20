import React from 'react';
import { Link } from 'react-router-dom';

import Posters from '../Posters';

const AllPostersPage = () => {
  return (
    <>
      <div>AllPostersPage</div>

      <div>
        <Posters />
        <Link to="/CheckoutPage">Checkout</Link>
      </div>
    </>
  );
};

export default AllPostersPage;

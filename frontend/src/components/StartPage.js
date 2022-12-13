import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <>
      <p> Start Page</p>
      <Link to="/PosterPage"> Go to all posters</Link>
    </>
  );
};

export default StartPage;

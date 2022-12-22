import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../styles/Containers';

const StartPage = () => {
  return (
    <Wrapper>
      <Link to="/PosterPage"> Go to all posters</Link>
    </Wrapper>
  );
};

export default StartPage;

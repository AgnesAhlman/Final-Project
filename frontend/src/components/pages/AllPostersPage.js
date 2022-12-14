import React, { useState, useEffect } from 'react';
import { getPosters } from '../utils/api';

const AllPostersPage = () => {
  const [posters, setPosters] = useState([]);
  console.log(posters);

  const fetchPosters = () => {
    getPosters().then((data) => {
      setPosters(data);
    });
  };

  useEffect(() => {
    fetchPosters();
  }, []);

  return (
    <>
      <div>AllPostersPage</div>
      {posters.map((poster) => (
        <p key={poster.posterID}>{poster}</p>
      ))}
    </>
  );
};

export default AllPostersPage;

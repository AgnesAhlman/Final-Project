import React, { useState, useEffect } from 'react';
import { getPosters } from '../utils/api';

const Posters = () => {
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
      {posters.map((poster) => (
        <p key={poster.posterID}>{poster.color}</p>
      ))}
    </>
  );
};

export default Posters;

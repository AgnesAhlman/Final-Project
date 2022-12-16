import React from 'react';
import { useSelector } from 'react-redux';
// import { fetchPosters } from '../utils/api';
import Poster from './Poster';

const Posters = () => {
  // const [posters, setPosters] = useState([]);
  // console.log(posters);

  // const fetchAllPosters = () => {
  //   fetchPosters().then((data) => {
  //     setPosters(data);
  //   });
  // };

  // useEffect(() => {
  //   fetchAllPosters();
  // }, []);
  const allProducts = useSelector((store) => store.products);

  return (
    <>
      {allProducts.map((product) => (
        <Poster key={product.id} product={product} />
      ))}
    </>
  );
};

export default Posters;

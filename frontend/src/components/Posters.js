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
  const allProducts = useSelector((store) => store.products.items);

  return (
    <>
      {allProducts.map((product) => (
        <Poster key={product.posterID} product={product} />
      ))}
    </>
  );
};

export default Posters;

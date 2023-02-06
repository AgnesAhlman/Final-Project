import Footer from 'components/Footer';
import { Wrapper } from 'elements/Wrapper';
import React from 'react';
import { Background } from 'elements/Background';
import { Title } from 'elements/Title';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading';
import Navbar from '../Navbar';
import Posters from '../Posters';

const AllPostersPage = () => {
  const isLoading = useSelector((store) => store.products.isLoading);
  return (
    <>
      <Navbar shadow />
      <Background padding="10rem">
        <Wrapper center bgColor="white" padding="0rem 8rem">
          <Title>POSTERS</Title>

          {isLoading && <Loading />}
          <Posters />
        </Wrapper>
      </Background>
      <Footer />
    </>
  );
};

export default AllPostersPage;

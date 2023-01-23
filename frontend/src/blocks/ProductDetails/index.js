import styled from 'styled-components/macro';

const ProductDetails = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: 'Source Sans Pro', sans-serif;

  h1 {
    border-bottom: 1px solid #e0e0e0;
  }

  h3 {
    margin: 0;
  }
  p {
    text-align: center;
  }
  div {
    width: 100%;
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
    padding: 4rem 0;
  }
`;

export default ProductDetails;

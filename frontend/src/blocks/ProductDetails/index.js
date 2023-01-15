import styled from 'styled-components/macro';
import Button from './button';

const ProductDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

ProductDetails.Button = Button;

export default ProductDetails;

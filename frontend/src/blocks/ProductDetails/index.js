import styled from 'styled-components';
import Button from './button';

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

ProductDetails.Button = Button;

export default ProductDetails;

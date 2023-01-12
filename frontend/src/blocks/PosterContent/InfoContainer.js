import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  font-weight: 200;

  p {
    margin: 0;
    font-size: 12px;
  }

  h4 {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 0.2rem;
    margin-top: 0;
    color: grey;
    font-family: 'Poppins', sans-serif;
  }

  h3 {
    margin: 0;
  }
`;

export default InfoContainer;

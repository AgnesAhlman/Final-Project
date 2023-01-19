import styled from 'styled-components/macro';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  p {
    margin: 0;
    font-size: 0.7rem;
  }

  h4 {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 0.2rem;
    margin-top: 0;
    color: grey;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
  }
`;

export default InfoContainer;

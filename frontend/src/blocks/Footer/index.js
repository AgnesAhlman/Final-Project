import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  align-items: flex;
  background-color: darkgray;
  /* background-color: var(--main-bg-color); */
  width: 100%;
  /* box-shadow: rgba(0, 0, 0, 0.25) 5px 3px 8px; */
  padding: 2rem;
  /* max-width: 1024px; */

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 80%;
  }

  a {
    width: 8%;
  }
`;

export default StyledFooter;

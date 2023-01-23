import styled from 'styled-components/macro';

export const LineTitle = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 200;
  width: 100%;
  position: relative;
  text-align: center;
  margin-top: 8rem;

  & span {
    background-color: var(--main-bg-color);
    padding: 0 20px;
    position: relative;
    z-index: 1;
  }

  &:before {
    content: '';
    display: block;
    border-top: solid 1px #c1c1c1;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: 1;
  }
`;

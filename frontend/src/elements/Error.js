import styled from 'styled-components/macro';

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  width: 100%;
  gap: 0.5rem;
  background-color: #e6e3e3;
  margin-bottom: 1rem;
  font-size: 11px;
  align-items: center;
  text-align: center;

  & svg {
    font-size: 1rem;
    color: tomato;
  }
`;

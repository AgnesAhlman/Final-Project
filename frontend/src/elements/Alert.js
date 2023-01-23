import styled from 'styled-components/macro';

export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a7c7a7;
  padding: 0.8rem;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 12px;
  gap: 0.5rem;

  @media (max-width: 567px) {
    position: fixed;
    bottom: 0;
  }
`;

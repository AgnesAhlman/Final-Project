import styled from 'styled-components/macro';
import { Content } from './Content';
import { Button } from './Button';

export const Popup = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #504a48cf;
  padding-top: 2rem;
  position: fixed;
  top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

Popup.Content = Content;
Popup.Button = Button;

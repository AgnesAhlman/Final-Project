import styled from 'styled-components/macro';
import { Cell } from './Cell';

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
`;

Grid.Cell = Cell;

export default Grid;

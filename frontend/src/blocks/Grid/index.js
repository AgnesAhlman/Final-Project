import styled from 'styled-components/macro';
import { Cell } from './Cell';

const Grid = styled.div`
  display: flex;
  flex-direction: ${(props) => props.column || 'flex-start'};
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  padding-top: ${(props) => props.padding};
  box-shadow: ${(props) =>
    props.boxShadow ? 'rgb(0 0 0 / 11%) 0px 3px 8px;' : 'none'};

  @media (max-width: 576px) {
    box-shadow: none;
  }
`;

Grid.Cell = Cell;

export default Grid;

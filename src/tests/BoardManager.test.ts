import Board from '../Board';
import { playCoordinates } from '../BoardManager';
import BoardState from '../BoardState';
import CellType from '../CellType';

describe('playCoordinates function', () => {
  it('should return same board when coordinates are incorrect', () => {
    const board = new Board();
    const newBoard = playCoordinates(board, -1, -3);
    expect(newBoard).toEqual(board);
  });

  it('should return same board when cell already visited', () => {
    const board = new Board();
    const [x, y] = [1, 3];
    board.visited[x][y] = true;
    const newBoard = playCoordinates(board, x, y);
    expect(newBoard).toEqual(board);
  });

  it('should have lost state if bomb coordinates are played', () => {
    const board = new Board();
    const coord = getFirstBombFromBoard(board);

    if (coord) {
      const [x, y] = [coord[0], coord[1]];
      const newBoard = playCoordinates(board, x, y);
      expect(newBoard.state).toEqual(BoardState.LOST);
    }
  });

  it('should have win state if all non bomb coordinates are played', () => {
    let board = new Board();
    const notBomb = (value: number) => value !== CellType.BOMB;
    const coordinates = getCoordinates(board, notBomb);
    coordinates.forEach((coord) => {
      const [x, y] = [coord[0], coord[1]];
      board = playCoordinates(board, x, y);
    });

    expect(board.state).toEqual(BoardState.WON);
  });
});

function getFirstBombFromBoard(board: Board): number[] | undefined {
  const coord = getCoordinates(board, (value: number) => value === CellType.BOMB);
  if (coord.length > 0) {
    return coord[0];
  }
  return undefined;
}

function getCoordinates(board: Board, predicate: Function): number[][] {
  const coordinates = [];
  board.content.forEach((row, i) => {
    // eslint-disable-next-line consistent-return
    row.forEach((value, j) => {
      if (predicate(value)) {
        coordinates.push([i, j]);
      }
    });
  });
  return coordinates;
}

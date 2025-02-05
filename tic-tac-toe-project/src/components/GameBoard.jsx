import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol, turns }) {
  // const[gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIdx, colIdx){
  //   setGameBoard((previousGameBoard) => {
  //     const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }

  let gameBoard = initialGameBoard;
  for(let turn of turns){
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => onSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button>
                {/* <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button> */}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

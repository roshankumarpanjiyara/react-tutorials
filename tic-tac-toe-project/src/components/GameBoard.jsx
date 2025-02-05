import { useState } from "react";

export default function GameBoard({
  onSelectSquare, activePlayerSymbol, board,
}) {
  // const[gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIdx, colIdx){
  //   setGameBoard((previousGameBoard) => {
  //     const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                  disabled={playerSymbol !== null ? true : false}>
                  {playerSymbol}
                </button>
                {/* <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button> */}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

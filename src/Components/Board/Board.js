import React from "react";

import Square from "./Square/Square";

const Board = (props) => {
  const displayBoard = () => {
    let board = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board.push(<Square value={props.board[i][j]} key={"" + i + j} />);
      }
    }
    return board;
  };

  return <div>{displayBoard()}</div>;
};

export default Board;

import React from "react";

import Square from "../Square/Square";
import './Board.css';

const Board = (props) => {
  const displayBoard = () => {
    let board = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board.push(
            <Square 
                value={props.board[i][j]} 
                key={"" + i + j} 
                row={i}
                col={j}
            />);
      }
    }
    return board;
  };

  return (
    <div className='Board'>
        {displayBoard()}
    </div>
    );
};

export default Board;

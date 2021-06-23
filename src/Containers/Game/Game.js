import React, { Component } from 'react';

import Board from '../../Components/Board/Board';
import './Game.css';

class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
            history: [{
                board: [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null]
                ]
            }],
            stepNumber: 0,
            nextStep: 'O',
        }
    }

    calculateWinner (board) {
        for(let row=0; row<3; row++) {
            if(board[row][0] && board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
                return board[row][0];
            }
        }
        for(let col=0; col<3; col++) {
            if(board[0][col] && board[0][col] === board[1][col] && board[0][col] === board[2][col]) {
                return board[0][col];
            }
        }
        if(board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return board[0][0];
        }
        if(board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return board[0][2];
        }
        return null;
    }

    squareClickHandler (row, col) {
        const history = this.state.history.slice(0, this.state.stepNumber+1);
        const current = [...history[history.length - 1].board].map(row => row.slice());
        if (current[row][col] || this.calculateWinner(current)) {
            return;
        }
        current[row][col] = this.state.nextStep;
        this.setState({
            history: history.concat([{board: current}]),
            stepNumber: history.length,
            nextStep: this.state.nextStep === 'O' ? 'X' : 'O',
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            nextStep: (step % 2) === 0 ? 'O' : 'X'
        });
    }

    render () {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.board);

        let statusText = 'Turn: ' + (this.state.stepNumber%2 === 0 ? 'O' : 'X');
        if(winner) {
            statusText = 'Winner: ' + winner;
        }
        else if(this.state.stepNumber === 9) {
            statusText = 'Draw';
        }

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move} onClick={() => this.jumpTo(move)}>
                    {desc}
                </li>
            );
        });

        return (
            <div className='game-container'>
                <Board 
                    board={current.board} 
                    click={(row, col) => this.squareClickHandler(row, col)}
                />
                <div className='game-info'>
                    <p>{statusText}</p>
                    <ol>
                        {moves}
                    </ol>
                </div>
            </div>
        );
    }
};

export default Game;
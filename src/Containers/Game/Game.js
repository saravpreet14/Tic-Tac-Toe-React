import React, { Component } from 'react';

import Board from '../../Components/Board/Board';

class Game extends Component {
    state = {
        history: [{
            board: Array(3).fill(Array(3).fill('X'))
        }],
        stepNumber: 0,
        nextStep: 'O',
        status: null,
    }

    squareClickHandler = (row, col) => {
        if (this.state.status) {
            return;
        }
        const history = this.state.history.slice(0, this.state.nextStep+1);
        const current = history[history.length - 1];
        
    }

    render () {
        const history = this.state.history;

        return (
            <div className='game-container'>
                <Board board={history[this.state.stepNumber].board} />
            </div>
        );
    }
};

export default Game;
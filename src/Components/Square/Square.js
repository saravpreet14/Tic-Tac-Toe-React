import React from 'react';

import './Square.css';

const Square = (props) => {
    let classList = [];
    if (props.col > 0) {
        classList.push('borderLeft');
    }
    if (props.row > 0) {
        classList.push('borderTop');
    }

    return (
        <div className={classList.join(' ')} >
            {props.value}
        </div>
    );
};

export default Square;
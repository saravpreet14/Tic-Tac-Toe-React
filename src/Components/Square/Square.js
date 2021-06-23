import React from 'react';

import './Square.css';

const Square = (props) => {
    let classList = ['Square'];
    if (props.col > 0) {
        classList.push('borderLeft');
    }
    if (props.row > 0) {
        classList.push('borderTop');
    }

    let link;
    if(props.value === 'X') {
        link = 'https://p.kindpng.com/picc/s/4-46453_cross-mark-black-x-hd-png-download.png';
    }
    else if(props.value === 'O') {
        link = 'https://www.pngfind.com/pngs/m/99-997276_open-black-hollow-circle-transparent-hd-png-download.png';
    }

    let image = null;
    if(link) {
        image = (<img src={link} />);
    }

    return (
        <div className={classList.join(' ')} onClick={props.click} >
            {image}
        </div>
    );
};

export default Square;
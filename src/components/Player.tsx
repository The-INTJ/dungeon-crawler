// a 'player' token which will render a green div

import React from 'react';

interface PlayerProps {
    width: number;
    height: number;
}

const Player: React.FC<PlayerProps> = ({ width, height }) => {
    return <div style={{ position: 'absolute', backgroundColor: 'green', width: `${width}px`, height: `${height}px` }}></div>;
};

export default Player;
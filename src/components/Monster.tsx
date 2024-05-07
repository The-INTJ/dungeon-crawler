import React from 'react';

interface MonsterProps {
    width: number;
    height: number;
}

const Monster: React.FC<MonsterProps> = ({ width, height }) => {
    return <div style={{ width: `${width}px`, height: `${height}px`, position: 'absolute' }}>👾</div>;
};

export default Monster;
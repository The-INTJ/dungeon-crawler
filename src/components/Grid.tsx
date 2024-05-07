import React from 'react';
import Player from './Player';
import Monster from './GridMonster';

type Grid = number[][];

type GridProps = {
    grid: Grid;
    playerPosition: [number, number];
    monsterPositions: [number, number][];
};

// define default height/width for player and grid
const defaultHeight = 30;
const defaultWidth = 30;

const Grid: React.FC<GridProps> = ({ grid, playerPosition, monsterPositions }) => {
    return (
        <div>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, columnIndex) => (
                        <span
                            key={columnIndex}
                            style={{
                                display: 'inline-block',
                                width: defaultWidth,
                                height: defaultHeight,
                                backgroundColor: cell === 1 ? 'red' : 'white',
                                border: '1px solid black',
                                margin: '0 0 -4px 0'
                            }}
                        >
                            {playerPosition[0] === rowIndex && playerPosition[1] === columnIndex ? <Player width={defaultWidth} height={defaultHeight} /> : ''}
                            {monsterPositions.some(([x, y]) => x === rowIndex && y === columnIndex) ? <Monster width={defaultWidth} height={defaultHeight} /> : ''}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;
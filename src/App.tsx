import React, { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import BattleModal from './components/BattleModal';

function App() {
  // init empty grid
  const grid = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0));
  // define player position variable
  const [playerPosition, setPlayerPosition] = useState<[number, number]>([0, 0]);
  const [showBattle, setShowBattle] = useState(false); // State to manage the visibility of the battle modal
  // define monster positions
  const [monsterPositions, setMonsterPositions] = useState<[number, number][]>([
    [3, 3],
    [5, 5],
    [7, 7],
  ]);


  // listen for arrow keys or wasd to move player

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      console.log(e.key);
      setPlayerPosition(prevPos => {
        let newX = prevPos[0];
        let newY = prevPos[1];
        switch (e.key) {
          case 'ArrowUp':
          case 'w':
            newX = Math.max(prevPos[0] - 1, 0);
            break;
          case 'ArrowDown':
          case 's':
            newX = Math.min(prevPos[0] + 1, 9);
            break;
          case 'ArrowLeft':
          case 'a':
            newY = Math.max(prevPos[1] - 1, 0);
            break;
          case 'ArrowRight':
          case 'd':
            newY = Math.min(prevPos[1] + 1, 9);
            break;
          default:
            return prevPos; // return previous position if key is not recognized
        }
        if (isMonsterSquare(newX, newY)) {
          setShowBattle(true); // Open the battle modal if a condition is met
          console.log("FIGHT")
        }
        return [newX, newY];
      });
    };

    // Add event listener, but only if the battle modal is not shown
    if (!showBattle) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showBattle]);

  const isMonsterSquare = (x: number, y: number) => {
    return monsterPositions.some(([monsterX, monsterY]) => monsterX === x && monsterY === y);
  };

  const handleWin = () => {
    console.log("Player wins!");
    setShowBattle(false);
    // get current player position, remove that array from monster array
    setMonsterPositions(prevPositions => {
      return prevPositions.filter(
        ([monsterX, monsterY]) => monsterX !== playerPosition[0] || monsterY !== playerPosition[1]
      );
    });
  };

  const handleLose = () => {
    console.log("Player loses!");
    setShowBattle(false);
    // reset player position to 0, 0
    setPlayerPosition([0, 0]);
  };

  return (
    <div className="App">
      <Grid
        grid={grid}
        playerPosition={playerPosition}
        monsterPositions={monsterPositions}
      />
      {showBattle && (
        <BattleModal
         onWin={handleWin} 
         onLose={handleLose}
        />
      )}
    </div>
  );
}

export default App;

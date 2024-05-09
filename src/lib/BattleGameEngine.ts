import { Player, GameState, HealthUpdateCallback, Monster } from "./types";

class BattleGameEngine {
  gameState: GameState;
  onHealthUpdate: HealthUpdateCallback;

  constructor(player: Player, monsters: Monster[]) {
    this.gameState = {
      player,
      monsters,
      currentRound: 1
    };
  }

  startRound(): void {
    // Logic to start and handle a game round
  }

  attack(player: Player, monster: Monster): void {
        // Apply the attack damage to the monster's health
        const newHealth = monster.health - player.attack;
        monster.health = newHealth > 0 ? newHealth : 0;  // Ensure health does not go below zero

        // Call the health update callback
        this.onHealthUpdate(monster, monster.health);

        // Optionally, you could handle the monster's defeat if its health drops to 0
        if (monster.health === 0) {
            console.log(`${monster.name} has been defeated!`);
        }
    }

  // Additional methods as needed...
}

export default BattleGameEngine;
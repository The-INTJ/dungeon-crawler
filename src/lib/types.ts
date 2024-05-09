export interface Entity {
  name: string;
  health: number;
  attack: number;
}

export interface Player extends Entity {
  defense: number; // Players might have a defense attribute that monsters don't
}

export interface PlayerCardProps extends Player {
    attackAnimationPosition?: { x: number; y: number, ability: string } | null;
}

export interface Monster extends Entity {
  monsterType: string; // Additional attribute to differentiate types of monsters
}

export interface GameState {
  player: Player;
  monsters: Monster[];
  currentRound: number;
}

export type HealthUpdateCallback = (
  entity: Player | Monster,
  newHealth: number
) => void;

export interface GameRound {
  roundNumber: number;
  playerAction: () => void;
  monsterActions: (() => void)[];
}

export interface IMonsterCard extends Monster {
  image: string;
}
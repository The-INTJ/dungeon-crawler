import styled from "styled-components";
import playerImage from "../assets/player.jpeg";
import swordImage from "../assets/sword.svg";
import shieldImage from "../assets/shield.svg";
import specialImage from "../assets/special.svg";
import { PlayerCardProps } from "../lib/types";
import PlayerSword from "./PlayerSword";

const PlayerCard = (player: PlayerCardProps) => {
  return (
    <CardContainer>
      <PlayerImage src={playerImage} alt={player.name} />
      <CardBody>
        <CardTitle>{player.name}</CardTitle>
        <AbilitiesContainer>
          <PlayerSword x={0} y={0} />
          <PlayerItem src={shieldImage} alt="Shield"></PlayerItem>
          <PlayerItem src={specialImage} alt="Special"></PlayerItem>
        </AbilitiesContainer>
      </CardBody>
    </CardContainer>
  );
};

export default PlayerCard;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9; // Slightly different background to distinguish from MonsterCard
`;

const PlayerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const CardBody = styled.div`
  padding: 10px 0;
`;

const CardTitle = styled.h5`
  font-size: 18px;
  margin-bottom: 10px;
`;

const PlayerItem = styled.img`
  max-width: 50px;
  width: 100%;
  height: auto;
`;

const AbilitiesContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

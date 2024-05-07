// Player card depicting a player character with health, attack, and defense power
import styled from "styled-components";
import playerImage from "../assets/player.jpeg";  // Ensure you have an appropriate player image

const PlayerCard = () => {
    const player = {
        name: "Hero",
        health: 12,
        attack: 2,
        defense: 11,
        image: playerImage,
    };
  return (
    <CardContainer>
      <PlayerImage src={player.image} alt={player.name} />
      <CardBody>
        <CardTitle>{player.name}</CardTitle>
        <CardText>Health: {player.health}</CardText>
        <CardText>Attack: {player.attack}</CardText>
        <CardText>Defense: {player.defense}</CardText>
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

const CardText = styled.p`
  margin-bottom: 5px;
`;

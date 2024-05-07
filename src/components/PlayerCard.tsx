import styled from "styled-components";
import playerImage from "../assets/player.jpeg";
import swordImage from "../assets/sword.svg";
import shieldImage from "../assets/shield.svg";
import specialImage from "../assets/special.svg";

const PlayerCard = () => {
  const player = {
    name: "Hero",
    health: 12,
    attack: 2,
    defense: 11,
    image: playerImage,
    sword: {
      svg: swordImage,
      alt: "Sword",
    },
    shield: {
      svg: shieldImage,
      alt: "Shield",
    },
    special: {
      svg: specialImage,
      alt: "Special",
    },
  };
  return (
    <CardContainer>
      <PlayerImage src={player.image} alt={player.name} />
      <CardBody>
        <CardTitle>{player.name}</CardTitle>
        <PlayerItem src={player.sword.svg} alt={player.sword.alt}></PlayerItem>
        <PlayerItem
          src={player.shield.svg}
          alt={player.shield.alt}
        ></PlayerItem>
        <PlayerItem
          src={player.special.svg}
          alt={player.special.alt}
        ></PlayerItem>
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

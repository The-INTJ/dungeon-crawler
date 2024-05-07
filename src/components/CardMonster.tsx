// card depecting a monster with health and attack power
import styled from "styled-components";
import monsterImage from "../assets/react.svg";

const CardMonster = () => {
    const monster = {
        name: "Goblin",
        health: 100,
        attack: 20,
        image: monsterImage,
    };
  return (
    <CardContainer>
      <MonsterImage src={monster.image} alt={monster.name} />
      <CardBody>
        <CardTitle>{monster.name}</CardTitle>
        <CardText>Health: {monster.health}</CardText>
        <CardText>Attack: {monster.attack}</CardText>
      </CardBody>
    </CardContainer>
  );
};

export default CardMonster;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MonsterImage = styled.img`
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

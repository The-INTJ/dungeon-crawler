import "../styles/BattleModal.css";
import styled from "styled-components";
import CardMonster from "./MonsterCard";
import CardPlayer from "./PlayerCard";
import { useState } from "react";
import goblinImage from "../assets/goblin.png";
import BattleGameEngine from "../lib/BattleGameEngine";

const BattleModal = ({
  onWin,
  onLose,
}: {
  onWin: () => void;
  onLose: () => void;
}) => {
  const [monsters, setMonsters] = useState([
    {
      name: "Goblin",
      health: 10,
      attack: 2,
      monsterType: "Goblin",
      image: goblinImage,
    },
    {
      name: "Orc",
      health: 15,
      attack: 3,
      monsterType: "Orc",
      image: goblinImage,
    },
    {
      name: "Troll",
      health: 20,
      attack: 4,
      monsterType: "Troll",
      image: goblinImage,
    },
  ]);

  const [player, setPlayer] = useState({
    name: "Hero",
    health: 12,
    attack: 2,
    defense: 11,
  });

  // const bge = new BattleGameEngine(player, monsters);

  return (
    <ModalStyles>
      <ModelContent>
        <ModalHeader>
          <ModalTitle>Battle!</ModalTitle>
        </ModalHeader>
        <Details>
          <BattleMessage>
            A monster has appeared! Prepare for battle.
          </BattleMessage>
        </Details>
        <Monsters>
          <CardMonster
            {...monsters[0]}
          />
          <CardMonster 
            {...monsters[1]}
          />
          <CardMonster
            {...monsters[2]}
          />
        </Monsters>
        <Player>
          <CardPlayer
            {...player}
          />
        </Player>
        <ModalFooter>
          <BtnPrimary type="button" className="btn btn-primary" onClick={onWin}>
            Win
          </BtnPrimary>
          <BtnSecondary
            type="button"
            className="btn btn-secondary"
            onClick={onLose}
          >
            Lose
          </BtnSecondary>
        </ModalFooter>
      </ModelContent>
    </ModalStyles>
  );
};

export default BattleModal;

const ModalStyles = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  justify-items: center;
  align-items: center;
`;

const ModalHeader = styled.div`
`;

const ModalTitle = styled.h3`
  margin: 0;
`;

const ModalFooter = styled.div`
  padding: 10px;
`;

const BtnPrimary = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
`;

const BtnSecondary = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
`;
const ModelContent = styled.div`
  background-color: #f4f7f8; /* Light blueish grey background */
  margin: auto;
  border: 1px solid #888;
  width: 90vw; /* 80% of viewport width */
  height: 90vh; /* 80% of viewport height */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-y: auto; /* Enable vertical scrollbar */
  display: grid;
  gap: 10px;
`;

const Details = styled.div`
  background-color: #f3f3f3;
  border-radius: 8px;
`;

const BattleMessage = styled.p`
  color: red;
  font-size: 16px;
  margin: 0;
`;

const Monsters = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const Player = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

import "../styles/BattleModal.css";
import styled from "styled-components";
import CardMonster from "./CardMonster";

const BattleModal = ({
  onWin,
  onLose,
}: {
  onWin: () => void;
  onLose: () => void;
}) => {
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
          <CardMonster />
          <CardMonster />
          <CardMonster />
        </Monsters>
        <Player></Player>
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalHeader = styled.div`
  padding: 10px;
`;

const ModalTitle = styled.h3`
  margin: 0;
`;

const ModalBody = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  overflow-y: auto;
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
  padding: 20px;
  border: 1px solid #888;
  width: 80vw; /* 80% of viewport width */
  height: 80vh; /* 80% of viewport height */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-y: auto; /* Enable vertical scrollbar */
`;

const Details = styled.div`
  padding: 10px;
  background-color: #f3f3f3;
  border-radius: 8px;
`;

const BattleMessage = styled.p`
  color: red;
  font-size: 16px;
`;

const Monsters = styled.div`
  background-image: url("/path-to-monsters-image.jpg");
  height: 300px;
  background-size: cover;
`;

const Player = styled.div`
  background-image: url("/path-to-player-image.jpg");
  height: 300px;
  background-size: cover;
`;

import "../styles/BattleModal.css";


const BattleModal = ({ onWin, onLose }: { onWin: () => void, onLose: () => void }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Battle!</h5>
                </div>
                <div className="modal-body">
                    <p>A monster has appeared! Prepare for battle.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={onWin}>
                        Win
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={onLose}>
                        Lose
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BattleModal;


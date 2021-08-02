import "./GameInfo.scss";
import { useState, useEffect } from "react";

export default function GameInfo({ game, endGame }) {
    const [updateState, setUpdate] = useState(0);
    const update = () => {
        setUpdate(1 - updateState);
    };
    return (
        <header onClick={update} className="gameInfo">
            <span>{`flags: ${game.flagsLeft}🚩`}</span>
            <button onClick={endGame}>End Game</button>
        </header>
    );
}

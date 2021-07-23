import './GameInfo.scss';

export default function GameInfo({flags, endGame}) {
    

    return (
        <header className="gameInfo">
            <span>{`flags: ${flags}🚩`}</span>
            <button onClick={endGame}>End Game</button>
        </header>
    );
}

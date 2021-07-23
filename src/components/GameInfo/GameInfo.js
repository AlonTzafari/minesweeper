import './GameInfo.scss';

export default function GameInfo({flags, endGame}) {
    return (
        <header className="gameInfo">
            <span>{`flags: ${flags}🚩`}</span>
            <button>End Game</button>
        </header>
    );
}

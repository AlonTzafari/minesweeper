import {useState, useContext} from 'react';
import gameContext from '../../contexts/gameContext';
import GameInfo from '../../components/GameInfo';
import GameBoard from '../../components/GameBoard';
import GameClass from '../../logic/Game'; 

export default function Game() {

    const {setStart, gameConfig} = useContext(gameContext);
    const [game] = useState(new GameClass(gameConfig));
    const [updateState, setUpdate] = useState(0);
    const update = () => {
        setUpdate(1 - updateState);
    }

    const endGame = () => {
        setStart(false);
    }

    return (
        <div className="page" data-testid="game">
            <GameInfo flags={game.flagsLeft} endGame={endGame} />
            <GameBoard game={game} update={update}/>
            {updateState ? null : null}
        </div>
    )
}

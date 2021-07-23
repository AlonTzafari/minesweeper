import {useState} from 'react'
import GameInfo from '../../components/GameInfo';
import GameBoard from '../../components/GameBoard';
import GameClass from '../../logic/Game'; 

export default function Game({config}) {

    const [game] = useState(new GameClass(config));


    return (
        <div className="page" data-testid="game">
            <GameInfo flags={game.flagsLeft}/>
            <GameBoard game={game}/>
        </div>
    )
}

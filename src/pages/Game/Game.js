import {useState} from 'react'
import GameInfo from '../../components/GameInfo';
import GameBoard from '../../components/GameBoard';

export default function Game({config}) {
    return (
        <div className="page">
            <GameInfo />
            <GameBoard />
        </div>
    )
}

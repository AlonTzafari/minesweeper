import React from 'react'

export default function GameInfo({flags, endGame}) {
    return (
        <header>
            <span>{`flags: ${flags}`}</span>
            <button>End Game</button>
        </header>
    );
}

import React from 'react'

export default function GameBoard({game}) {

    return (
        <div>
            <table>
                {
                    game.board.map( (row, i) => {
                        return <tr key={i}>
                            {row.map( (tile, j) => <td key={j}>{tile.value}</td>)}
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

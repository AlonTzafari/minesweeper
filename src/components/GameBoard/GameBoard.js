import Tile from '../Tile';
import './GameBoard.scss';

export default function GameBoard({game}) {

    return (
        <div className="gameBoard">
            <table cellSpacing="0" cellPadding="0">
                <tbody>
                    {
                        game.board.map( (row, i) => {
                            return <tr key={i}>
                                {row.map( (tile, j) => <td key={j}><Tile tile={tile.value}/></td>)}
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

import Tile from '../Tile';
import './GameBoard.scss';

export default function GameBoard({game}) {

    return (
        <div className="gameBoard">
            <table cellSpacing="0" cellPadding="0">
                <tbody>
                    {
                        game.board.map( (row, y) => {
                            return <tr key={y}>
                                {
                                    row.map( (tile, x) => {
                                        const reveal = () => game.reveal(x,y);
                                        const flag = () => game.flag(x,y);
                                        return (
                                            <td key={x}>
                                                <Tile tile={tile} superman={game.superman} reveal={reveal} flag={flag}/>
                                            </td>);
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

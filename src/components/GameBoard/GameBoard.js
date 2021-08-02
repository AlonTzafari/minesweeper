import "./GameBoard.scss";
import Tile from "../Tile";

export default function GameBoard({ game, update }) {
    return (
        <div className="gameBoard">
            <table cellSpacing="0" cellPadding="0">
                <tbody>
                    {game.board.map((row, y) => {
                        return (
                            <tr key={y}>
                                {row.map((tile, x) => {
                                    return (
                                        <td key={x}>
                                            <Tile
                                                tile={tile}
                                                superman={game.superman}
                                                game={game}
                                                position={{x,y}}
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

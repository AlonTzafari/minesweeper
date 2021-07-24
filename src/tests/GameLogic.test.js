import Game from '../logic/Game';

describe('game logic test', () => {

    test('Game class instance', () => {
        const config = {
            width: 8,
            height: 8,
            mines: 35,
        };
        const game = new Game(config);
        expect(game instanceof Game).toBeTruthy();
        expect(game.board.length).toBe(8);
    });

    test('flood fill', () => {
        const config = {
            width: 300,
            height: 300,
            mines: 4,
        };
        const game = new Game(config);
        let x = 0;
        while (game.board[0][x] === '💣') x++;
        let err = null;
        try {
            game.reveal(x, 0);
        } catch(e) {
            err = e;
        }
        expect(err).toBeFalsy();
    })
});
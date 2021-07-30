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

    test('flood fill stack overflow', () => {
        const config = {
            width: 300,
            height: 300,
            mines: 4,
        };
        const game = new Game(config);
        let x = 0;
        while (game.board[0][x].value === 'bomb') x++;
        let err = null;
        try {
            game.reveal(x, 0);
        } catch(e) {
            err = e;
        }
        expect(err).toBeFalsy();
    });

    test('consecutive clicks on mine', () => {
        const config = {
            width: 20,
            height: 20,
            mines: 4,
        };

        let didWin = false;
        const onWin = () => didWin = true;

        const game = new Game(config);
        game.onWin = onWin;

        const minePos = {x: 0, y: 0};
        loop: for (let y = 0; y < config.height; y++) {
            for (let x = 0; x < config.width; x++) {
                if (game.board[y][x].value === 'bomb') {
                    minePos.x = x;
                    minePos.y = y;
                    break loop;
                }
            }
        }
        for (let i = 0; i < config.mines - 1; i++) {
            game.flag(minePos.x, minePos.y);//place
            game.flag(minePos.x, minePos.y);//remove
        }
        game.flag(minePos.x, minePos.y);//place last

        expect(didWin).toBe(false);
    });
});
import GameClass from '../logic/Game';

test('Game class instance', () => {
    const config = {
        width: 8,
        height: 8,
        mines: 35,
    };
    const game = new GameClass(config);
    expect(game instanceof GameClass).toBeTruthy();
    expect(game.board.length).toBe(8);
});
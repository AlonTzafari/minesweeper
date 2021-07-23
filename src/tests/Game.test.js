import { render, screen } from '@testing-library/react';
import Game from '../pages/Game';
import GameClass from '../logic/Game';

test('renders game page', () => {
    const config = {
        width: 8,
        height: 8,
        mines: 8,
    };

    render(<Game config={config}/>);
    expect(screen.getByText(/flags: \d+/)).toBeInTheDocument();
});

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
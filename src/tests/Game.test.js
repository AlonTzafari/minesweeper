import { render, screen } from '@testing-library/react';
import Game from '../pages/Game';
import GameClass from '../logic/Game';

test('renders game page', () => {
    render(<Game />);
});

test('Game class instance', () => {
    const config = {
        width: 8,
        height: 8,
        mines: 8,
    };
    const game = new GameClass(config);
});
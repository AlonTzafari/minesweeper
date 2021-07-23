import { render, screen } from '@testing-library/react';
import Game from '../pages/Game';
import GameClass from '../logic/Game';
import gameContext from '../contexts/gameContext';

test('renders game page', () => {
    const providerValue = {
        start: false,
        setStart: () => {},
        gameConfig: {width: 8, height: 8, mines: 8, superman:false},
        setGameConfig: () => {},
    }

    render(<gameContext.Provider value={providerValue}><Game/></gameContext.Provider>);
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
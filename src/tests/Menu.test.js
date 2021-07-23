import { render, screen } from '@testing-library/react';
import Menu from '../pages/Menu';
import gameContext from '../contexts/gameContext';

test('renders menu page', () => {
    const providerValue = {
        start: false,
        setStart: () => {},
        gameConfig: {width: 8, height: 8, mines: 8, superman:false},
        setGameConfig: () => {},
    } 
    render(<gameContext.Provider value={providerValue}><Menu /></gameContext.Provider>);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText('Minesweeper')).toBeInTheDocument();
    expect(screen.getByLabelText('Width')).toBeInTheDocument();
    expect(screen.getByLabelText('Height')).toBeInTheDocument();
    expect(screen.getByLabelText('Mines')).toBeInTheDocument();
    expect(screen.getByLabelText('Superman Mode')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
});
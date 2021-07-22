import { render, screen } from '@testing-library/react';
import Menu from '../pages/Menu';

test('renders menu page', () => {
    render(<Menu />);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText('Minesweeper')).toBeInTheDocument();
    expect(screen.getByLabelText('Width')).toBeInTheDocument();
    expect(screen.getByLabelText('Height')).toBeInTheDocument();
    expect(screen.getByLabelText('Mines')).toBeInTheDocument();
    expect(screen.getByLabelText('Superman Mode')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
});
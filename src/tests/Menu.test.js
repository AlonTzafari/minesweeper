import { render, screen } from '@testing-library/react';
import Menu from '../pages/Menu';

test('renders menu page', () => {
    render(<Menu />);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
});
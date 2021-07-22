import { render, screen } from '@testing-library/react';
import Menu from '../pages/Menu';

test('renders action menu', () => {
    render(<Menu />);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App renders menu', () => {
    render(<App />);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
});
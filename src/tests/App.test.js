import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('App renders menu', () => {
    render(<App />);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
});

test('App renders game', async () => {

    render(<App />); console.log('render');
    fireEvent.click(screen.getByText(/START/i));  console.log('find btn');
    
    expect(screen.queryByTestId('menu')).toBe(null);
    expect(screen.getByTestId('game')).toBeInTheDocument();
});
    

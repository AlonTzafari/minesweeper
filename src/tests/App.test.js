import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {

    
    test('App renders menu', () => {
        render(<App />);
        expect(screen.getByTestId('menu')).toBeInTheDocument();
    });
    
    test('App renders game', () => {
        render(<App />);
        const startBtn = screen.getByText(/START/i);
        startBtn.click();
        expect(screen.queryByTestId('menu')).toBe(null);
        expect(screen.getByTestId('game')).toBeInTheDocument();
    });
});
    

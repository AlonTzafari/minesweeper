import { render, screen } from '@testing-library/react';
import App from './App';

test('renders action menu', () => {
    render(<App />);
    expect(screen.getByTestId('actionMenu')).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders action menu', () => {
  render(<App />);
  const actionMenu = screen.queryAllByTestId('actionMenu');
  expect(actionMenu).toBeInTheDocument();
});

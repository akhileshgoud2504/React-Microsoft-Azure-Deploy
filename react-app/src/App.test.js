import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('gitlink');
  expect(linkElement).toBeInTheDocument();
});

test('Is URL correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('gitlink');
  expect(linkElement.href).toContain('github.com/akhileshgoud2504');
});

import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

const links = [
  { text: 'Home', location: '/' },
  { text: 'Destinations', location: '/Destinations' },
  { text: 'Reserve', location: '/Reserve' },
  { text: 'Login', location: '/Login' },
];

test('render about link', () => {
  render(<Navigation />);
  expect(screen.getByText(/Destinations/)).toBeInTheDocument();
});

test.each(links)(
  'Check if Navigation has %s link.',
  (link) => {
    render(<Navigation />);
    const linkDom = screen.getByText(link.text);

    expect(linkDom).toHaveAttribute('to', link.location);
  },
);

test('Check if have logo and link to home page', () => {
  render(<Navigation />);
  const logoDom = screen.getByTestId(/trekker/);
  expect(logoDom).toHaveAttribute('to', '/Destiantions');
});

import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';
import trekker from '../trekker.png'

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

describe('Logo', () => {
  test('Logo must have src = "/logo.svg" and alt = "Logo"', () => {
    render(<Navigation />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'Logo');
  });
});

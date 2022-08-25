import { render, screen } from '@testing-library/react';
import Destinations from '../../pages/Destinations';

describe('<Destinations />', () => {
  it('Renders <Destinations /> component correctly', () => {
    const { getByText } = render(<Destinations />);
    expect(getByText('Have a funtastic experience')).toBeInTheDocument();
  });

  it('Shows the title for destinations', () => {
    const { getByText } = render(<Destinations />);
    expect(getByText('Latest Safaris')).toBeInTheDocument();
  });

  it('Shows the image for destinations', () => {
    render(<Destinations />);
    const image = screen.getByRole('img');
    expect(image).toBeHaveAttribute('alt', 'Logo');
  });
});

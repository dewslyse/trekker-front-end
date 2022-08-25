import renderer from 'react-test-renderer';
import Destinations from '../../pages/Destinations';
import Navigation from '../Navigation';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

it('renders in an expected way', () => {
  const tree = renderer.create(<Destinations />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in an expected way', () => {
  const tree = renderer.create(<Navigation />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in an expected way', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in an expected way', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in an expected way', () => {
  const tree = renderer.create(<Register />).toJSON();
  expect(tree).toMatchSnapshot();
});

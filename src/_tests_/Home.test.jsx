import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../store/configureStore';
import Home from '../pages/Home';

describe('Home Component Rendering', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
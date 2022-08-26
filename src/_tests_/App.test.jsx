import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../store/configureStore';
import App from '../App';

describe('App Component Rendering', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});

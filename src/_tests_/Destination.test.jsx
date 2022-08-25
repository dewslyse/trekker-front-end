import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../store/configureStore';
import Destination from '../pages/Destination';

describe('Destination Component Rendering', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Destination />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});

describe('Destination component rendering with data', () => {
  test('displays destination', () => {
    const state = [
      {
        id: 1,
        name: 'Destination 1',
        city_name: 'City 1',
        description: 'Description 1',
        image_url: 'https://picsum.photos/200/300',
        fee: '$100',
      },
    ];

    const component = renderer.create(
      <Provider store={store}>
        <Destination destination={state} />
      </Provider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

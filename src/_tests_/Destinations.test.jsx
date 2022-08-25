import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../store/configureStore';
import Destinations from '../pages/Destinations';

describe('Destinations Component Rendering', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Destinations />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});

describe('Destinations component rendering with data', () => {
  test('displays destinations', () => {
    const state = [
      {
        id: 1,
        name: 'Destination 1',
        city_name: 'City 1',
        description: 'Description 1',
        image_url: 'https://picsum.photos/200/300',
        fee: '$100',
      },
      {
        id: 2,
        name: 'Destination 2',
        city_name: 'City 2',
        description: 'Description 2',
        image_url: 'https://picsum.photos/200/300',
        fee: '$200',
      },
    ];

    const component = renderer.create(
      <Provider store={store}>
        <Destinations destinations={state} />
      </Provider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

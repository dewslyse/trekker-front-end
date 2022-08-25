import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/configureStore';
import Destinations from '../../pages/Destinations';



describe('Destination Page', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('user_id', 1);
    const tree = render(<Provider store={store}><Router><Destinations /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
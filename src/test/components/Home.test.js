import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../pages/Home';
import store from '../../store/configureStore';

describe('Login to app', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Home /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
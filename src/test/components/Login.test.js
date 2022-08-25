import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../../pages/Login';
import store from '../../store/configureStore';

describe('Login to app', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Login /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/configureStore';
import Reservations from '../../pages/Reservation';

describe('Reservation Page', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Reservations /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});

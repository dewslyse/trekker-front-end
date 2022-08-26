import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Reservation from '../components/SingleReservations';
import store from '../store/configureStore';



describe('Reservation Page', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Reservation /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});

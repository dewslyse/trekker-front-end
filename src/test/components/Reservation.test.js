import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/configureStore';
import Reservation from '../../components/SingleReservations';


describe('Reservation Page', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('userId', 1);
    const tree = render(<Provider store={store}><Router><Reservation /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
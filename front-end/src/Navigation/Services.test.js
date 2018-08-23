import StoreInfo from './StoreInfo';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><StoreInfo /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
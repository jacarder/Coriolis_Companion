import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bazaar from './Bazaar';

describe('<Bazaar />', () => {
  test('it should mount', () => {
    render(<Bazaar />);
    
    const bazaar = screen.getByTestId('Bazaar');

    expect(bazaar).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BazaarCart from './BazaarCart';

describe('<BazaarCart />', () => {
  test('it should mount', () => {
    render(<BazaarCart />);
    
    const bazaarCart = screen.getByTestId('BazaarCart');

    expect(bazaarCart).toBeInTheDocument();
  });
});
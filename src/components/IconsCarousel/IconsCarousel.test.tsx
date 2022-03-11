import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconsCarousel from './IconsCarousel';

describe('<IconsCarousel />', () => {
  test('it should mount', () => {
    render(<IconsCarousel />);
    
    const iconsCarousel = screen.getByTestId('IconsCarousel');

    expect(iconsCarousel).toBeInTheDocument();
  });
});
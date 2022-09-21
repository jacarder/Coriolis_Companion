import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconInfoCard from './IconInfoCard';

describe('<IconInfoCard />', () => {
  test('it should mount', () => {
    render(<IconInfoCard />);
    
    const iconInfoCard = screen.getByTestId('IconInfoCard');

    expect(iconInfoCard).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NameGenerator from './NameGenerator';

describe('<NameGenerator />', () => {
  test('it should mount', () => {
    render(<NameGenerator />);
    
    const nameGenerator = screen.getByTestId('NameGenerator');

    expect(nameGenerator).toBeInTheDocument();
  });
});
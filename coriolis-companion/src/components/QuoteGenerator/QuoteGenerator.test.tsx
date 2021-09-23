import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuoteGenerator from './QuoteGenerator';

describe('<QuoteGenerator />', () => {
  test('it should mount', () => {
    render(<QuoteGenerator />);
    
    const quoteGenerator = screen.getByTestId('QuoteGenerator');

    expect(quoteGenerator).toBeInTheDocument();
  });
});
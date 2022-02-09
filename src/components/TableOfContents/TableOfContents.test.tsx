import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableOfContents from './TableOfContents';

describe('<TableOfContents />', () => {
  test('it should mount', () => {
    render(<TableOfContents />);
    
    const tableOfContents = screen.getByTestId('TableOfContents');

    expect(tableOfContents).toBeInTheDocument();
  });
});
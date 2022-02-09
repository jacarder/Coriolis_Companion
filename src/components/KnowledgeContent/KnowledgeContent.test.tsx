import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import KnowledgeContent from './KnowledgeContent';

describe('<KnowledgeContent />', () => {
  test('it should mount', () => {
    render(<KnowledgeContent />);
    
    const knowledgeContent = screen.getByTestId('KnowledgeContent');

    expect(knowledgeContent).toBeInTheDocument();
  });
});
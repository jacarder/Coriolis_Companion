import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableOfContents from './TableOfContents';

describe('<TableOfContents />', () => {
  // let tableContents: IKnowledgeTreeItem[];
  // let mockService;
  beforeAll(() => {
    // tableContents = [
    //   {
    //     id: '0',
    //     name: 'test1',
    //     children: [
    //       {
    //         id: '0',
    //         name: 'test2'
    //       }
    //     ]
    //   }
    // ];
  });
  test('it should handleSectionSelection given method passed to onNodeSelect prop', () => {
    const mockHandleSectionSelection = jest.fn();
    render(<TableOfContents selectSection={mockHandleSectionSelection} />);
    const treeView = screen.getByRole('tree');
    const treeItem: HTMLElement = screen.getAllByRole('treeitem')[0];
    //  The first div in the treeItem component is the element that has the handle click event
    const div: Element = treeItem.firstElementChild as Element;
    fireEvent.click(div)
    expect(mockHandleSectionSelection).toHaveBeenCalledTimes(1);
  })
});
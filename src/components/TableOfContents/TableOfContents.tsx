import React, { FC, SyntheticEvent } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './TableOfContents.scss';
import { TreeItem, TreeView } from '@mui/lab';

interface TableOfContentsProps {
  selectSection: (selectedDataId: number) => void
}

const TableOfContents: FC<TableOfContentsProps> = ({selectSection}) => {
  const handleSectionSelection = (event: SyntheticEvent<Element, Event>, nodeIds: string) => {
    selectSection(+nodeIds);
  }
  return (
    <TreeView
      aria-label="Knowledge Center navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleSectionSelection}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="0" label="Welcome"/>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  )
};

export default TableOfContents;

import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './TableOfContents.scss';
import { TreeItem, TreeView } from '@mui/lab';
import { IKnowledgeTreeItem } from '../../interfaces/knowledge-tree';
import KnowledgeCenterService from '../../services/KnowledgeCenter.service';

interface TableOfContentsProps {
  selectSection: (selectedDataId: number) => void
}

const TableOfContents: FC<TableOfContentsProps> = ({ selectSection }) => {
  const [tree, setTree] = useState<IKnowledgeTreeItem[]>();
  useEffect(() => {
    setTree(KnowledgeCenterService.getTableOfContents());
  }, []);
  const handleSectionSelection = (event: SyntheticEvent<Element, Event>, nodeIds: string) => {
    selectSection(+nodeIds);
  }

  const createTree = (item: IKnowledgeTreeItem) => {
    return (
      <TreeItem key={item.id} nodeId={item.id} label={item.name}>
        {item.children
          ? item.children.map((childItem) => createTree(childItem))
          : null}
      </TreeItem>
    )
  }

  return (
    <TreeView
      aria-label="Knowledge Center navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleSectionSelection}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {tree?.map((item) => (
        createTree(item)
      ))}
    </TreeView>
  )
};

export default TableOfContents;

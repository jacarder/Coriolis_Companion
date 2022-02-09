import React, { FC } from 'react';
import './KnowledgeContent.scss';

interface KnowledgeContentProps {
  dataId: number,
  selectSection: (selectedDataId: number) => void
}

const KnowledgeContent: FC<KnowledgeContentProps> = ({dataId, selectSection}) => (
  <div className="KnowledgeContent" data-testid="KnowledgeContent">
    KnowledgeContent Component
  </div>
);

export default KnowledgeContent;

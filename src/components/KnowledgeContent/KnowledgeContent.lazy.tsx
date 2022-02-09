import React, { lazy, Suspense } from 'react';

const LazyKnowledgeContent = lazy(() => import('./KnowledgeContent'));

const KnowledgeContent = (
  props: JSX.IntrinsicAttributes & 
  { children?: React.ReactNode; } &
  { dataId: number, selectSection: (selectedDataId: number) => void }
) => (
  <Suspense fallback={null}>
    <LazyKnowledgeContent {...props} />
  </Suspense>
);

export default KnowledgeContent;

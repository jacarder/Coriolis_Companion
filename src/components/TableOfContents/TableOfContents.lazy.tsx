import React, { lazy, Suspense } from 'react';

const LazyTableOfContents = lazy(() => import('./TableOfContents'));

const TableOfContents = (
  props: JSX.IntrinsicAttributes & 
  { children?: React.ReactNode; } &
  { selectSection: (selectedDataId: number) => void }
) => (
  <Suspense fallback={null}>
    <LazyTableOfContents {...props} />
  </Suspense>
);

export default TableOfContents;

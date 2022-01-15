import React, { lazy, Suspense } from 'react';

const LazyNameGenerator = lazy(() => import('./NameGenerator'));

const NameGenerator = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNameGenerator {...props} />
  </Suspense>
);

export default NameGenerator;

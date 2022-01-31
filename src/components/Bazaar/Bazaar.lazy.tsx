import React, { lazy, Suspense } from 'react';

const LazyBazaar = lazy(() => import('./Bazaar'));

const Bazaar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBazaar {...props} />
  </Suspense>
);

export default Bazaar;

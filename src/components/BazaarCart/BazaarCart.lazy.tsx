import React, { lazy, Suspense } from 'react';

const LazyBazaarCart = lazy(() => import('./BazaarCart'));

const BazaarCart = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBazaarCart {...props} />
  </Suspense>
);

export default BazaarCart;

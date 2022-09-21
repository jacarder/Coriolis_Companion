import React, { lazy, Suspense } from 'react';

const LazyIconInfoCard = lazy(() => import('./IconInfoCard'));

const IconInfoCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & { iconId: number }) => (
  <Suspense fallback={null}>
    <LazyIconInfoCard {...props} />
  </Suspense>
);

export default IconInfoCard;

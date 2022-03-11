import React, { lazy, Suspense } from 'react';

const LazyIconsCarousel = lazy(() => import('./IconsCarousel'));

const IconsCarousel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyIconsCarousel {...props} />
  </Suspense>
);

export default IconsCarousel;

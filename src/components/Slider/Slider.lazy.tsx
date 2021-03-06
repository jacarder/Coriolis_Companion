import React, { lazy, Suspense } from 'react';

const LazySlider = lazy(() => import('./Slider'));

const Slider = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & { sliderTitle: string }) => (
  <Suspense fallback={null}>
    <LazySlider {...props} />
  </Suspense>
);

export default Slider;

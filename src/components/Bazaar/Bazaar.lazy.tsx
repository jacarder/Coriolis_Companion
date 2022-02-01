import React, { lazy, Suspense } from 'react';
import { BazaarCategory } from '../../constants/BazaarCategory';

const LazyBazaar = lazy(() => import('./Bazaar'));

const Bazaar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & {category: BazaarCategory}) => (
  <Suspense fallback={null}>
    <LazyBazaar {...props} />
  </Suspense>
);

export default Bazaar;

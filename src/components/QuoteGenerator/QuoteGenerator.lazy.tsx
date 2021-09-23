import React, { lazy, Suspense } from 'react';

const LazyQuoteGenerator = lazy(() => import('./QuoteGenerator'));

const QuoteGenerator = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyQuoteGenerator {...props} />
  </Suspense>
);

export default QuoteGenerator;

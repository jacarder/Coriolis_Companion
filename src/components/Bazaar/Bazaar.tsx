import React, { FC } from 'react';
import './Bazaar.scss';

interface BazaarProps {}

const Bazaar: FC<BazaarProps> = () => (
  <div className="Bazaar" data-testid="Bazaar">
    Bazaar Component
  </div>
);

export default Bazaar;

import React, { lazy, Suspense } from 'react';
import { ICharacter } from '../../interfaces/character';

const LazyCharacterCard = lazy(() => import('./CharacterCard'));

const CharacterCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & { characterInfo: ICharacter }) => (
  <Suspense fallback={null}>
    <LazyCharacterCard {...props} />
  </Suspense>
);

export default CharacterCard;

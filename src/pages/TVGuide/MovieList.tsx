import { LongList } from './LongList';
import React from 'react';

export const MovieList: React.FC<{}> = () => {
  return (
    <>
      Movie content
      <LongList type="Movie" />
    </>
  );
};

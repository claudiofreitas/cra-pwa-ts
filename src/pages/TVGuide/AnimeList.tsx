import { LongList } from './LongList';
import React from 'react';

export const AnimeList: React.FC<{}> = () => {
  return (
    <>
      Anime content
      <LongList type="Anime" />
    </>
  );
};

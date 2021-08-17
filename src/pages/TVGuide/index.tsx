import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Affix, Tabs } from 'antd';
import { MovieList } from './MovieList';
import { AnimeList } from './AnimeList';

const { TabPane } = Tabs;

export const TVGuide: React.FC<{}> = () => {
  const { guideId } = useParams<{ guideId: string }>();
  const history = useHistory();
  const allowedGuideId = ['anime', 'movie'];
  if (!allowedGuideId.includes(guideId)) {
    history.push('/tv-guide/anime');
  }

  return (
    <>
      <header>
        <h1>TV Guide</h1>
      </header>
      <main>
        <Affix>
          <Tabs
            defaultActiveKey={guideId}
            onChange={(key) => {
              history.push(`/tv-guide/${key}`);
            }}
          >
            <TabPane tab="Anime" key="anime" />
            <TabPane tab="Movie" key="movie" />
          </Tabs>
        </Affix>
        {guideId === 'movie' ? <MovieList /> : <AnimeList />}
      </main>
      <footer>Footer</footer>
    </>
  );
};

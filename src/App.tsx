import React from 'react';
import { Affix, Tabs } from 'antd';
import './App.scss';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
  useParams,
} from 'react-router-dom';

const { TabPane } = Tabs;

const LongList: React.FC<{ type: string }> = ({ type }) => {
  return (
    <ul>
      {Array<string>(37)
        .fill('a')
        .map((e, i) => {
          return (
            <li key={i}>
              {type} {i}
            </li>
          );
        })}
    </ul>
  );
};

const TVGuide: React.FC<{}> = () => {
  const { guideId } = useParams<{ guideId: string }>();
  const history = useHistory();
  if (guideId !== 'anime' && guideId !== 'movie') {
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
        {guideId === 'movie' ? (
          <>
            Movie content
            <LongList type="Movie" />
          </>
        ) : (
          <>
            Anime content
            <LongList type="Anime" />
          </>
        )}
      </main>
      <footer>Footer</footer>
    </>
  );
};

const App: React.FC<{}> = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/tv-guide/:guideId">
            <TVGuide />
          </Route>
          <Route path="/tv-guide">
            <Redirect to="/tv-guide/anime" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

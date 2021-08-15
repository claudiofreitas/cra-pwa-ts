import React from 'react';
import { Affix, Tabs } from 'antd';
import './App.scss';

const { TabPane } = Tabs;

const LongList: React.FC<{ type: string }> = ({ type }) => {
  return (
    <ul>
      {Array<string>(300)
        .fill('a')
        .map((e, i) => {
          return (
            <li>
              {type} {i}
            </li>
          );
        })}
    </ul>
  );
};

const TVGuide: React.FC<{}> = () => {
  return (
    <>
      <header>
        <h1>TV Guide</h1>
      </header>
      <main>
        <Affix>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Anime" key="1">
              Anime content
              <LongList type="Anime" />
            </TabPane>
            <TabPane tab="Movie" key="2">
              Movie content
              <LongList type="Movie" />
            </TabPane>
          </Tabs>
        </Affix>
      </main>
      <footer>Footer</footer>
    </>
  );
};

const App: React.FC<{}> = () => {
  return (
    <>
      <TVGuide />
    </>
  );
};

export default App;

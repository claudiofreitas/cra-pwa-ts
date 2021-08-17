import React from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { TVGuide } from './TVGuide';

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

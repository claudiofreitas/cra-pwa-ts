import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TVGuideRoute } from './TVGuide/TVGuideRoute';

const App: React.FC<{}> = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/tv-guide">
            <TVGuideRoute />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

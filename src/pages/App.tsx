import React from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { TVGuideRoute } from './TVGuide/TVGuideRoute';
import Map from './Map';

const App: React.FC<{}> = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/tv-guide">
            <TVGuideRoute />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Redirect to="/map" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

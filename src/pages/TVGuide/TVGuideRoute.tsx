import { Redirect, Route } from 'react-router-dom';
import { TVGuide } from './index';
import React from 'react';

export const TVGuideRoute: React.FC<{}> = () => {
  return (
    <>
      <Route path="/tv-guide/:guideSubPage1">
        <TVGuide />
      </Route>
      <Route path="/tv-guide">
        <Redirect to="/tv-guide/anime" />
      </Route>
    </>
  );
}

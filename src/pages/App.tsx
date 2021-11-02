import { FC } from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { TVGuideRoute } from './TVGuide/TVGuideRoute';
import Map from './Map';
import Shopping from './Shopping';
import { CartProvider } from '../context/CartContext';
import Birthdate1 from './Birthdate1';
import Birthdate2 from './Birthdate2';
import AsyncFn from './AsyncFn';
import AsyncRetry from './AsyncRetry';
import Geo from './Geo';
import MultiContexts from './MultiContexts';

const App: FC<{}> = () => {
  return (
    <>
      <MultiContexts />
      {/*<BrowserRouter>*/}
      {/*  <Switch>*/}
      {/*    <Route path="/tv-guide" component={TVGuideRoute} />*/}
      {/*    <Route path="/map" component={Map} />*/}
      {/*    <Route path="/birthdate1" component={Birthdate1} />*/}
      {/*    <Route path="/birthdate2" component={Birthdate2} />*/}
      {/*    <Route path="/async-fn" component={AsyncFn} />*/}
      {/*    <Route path="/async-retry" component={AsyncRetry} />*/}
      {/*    <Route path="/shopping">*/}
      {/*      <CartProvider>*/}
      {/*        <Shopping />*/}
      {/*      </CartProvider>*/}
      {/*    </Route>*/}
      {/*    <Redirect to="/async-retry" />*/}
      {/*  </Switch>*/}
      {/*</BrowserRouter>*/}
    </>
  );
};

export default App;

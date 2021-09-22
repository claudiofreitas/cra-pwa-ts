import { FC } from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { TVGuideRoute } from './TVGuide/TVGuideRoute';
import Map from './Map';
import Shopping from './Shopping';
import { CartProvider } from '../context/CartContext';

const App: FC<{}> = () => {
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
          <Route path="/shopping">
            <CartProvider>
              <Shopping />
            </CartProvider>
          </Route>
          <Redirect to="/shopping" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

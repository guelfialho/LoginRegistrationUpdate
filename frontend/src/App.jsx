import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutsPrivate from 'components/Routes/Private/Private';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <RoutsPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default PagesRoot;

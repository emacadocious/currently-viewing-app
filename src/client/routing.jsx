import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router';
import { Provider } from 'react-redux';

import history from './helpers/history';

import AppPage from './pages/AppPage';

const renderRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route
        exact
        path="/"
        component={AppPage}
      />
      <Route
        component={AppPage}
      />
    </Switch>
  </Router>
);

export default renderRoutes;

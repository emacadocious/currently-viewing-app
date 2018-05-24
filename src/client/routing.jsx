import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router';
import { Provider } from 'react-redux';

import store from './helpers/store';
import history from './helpers/history';

import AppPage from './pages/AppPage';

const renderRoutes = () => (
  <Provider store={store}>
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
  </Provider>
);

export default renderRoutes;

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory} from 'react-router';

import AlbumsContainer from './containers/AlbumsContainer'
import ArtistsContainer from './containers/ArtistsContainer'


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/albums" component={AlbumsContainer}/>
        <Route path="/artists" component={ArtistsContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

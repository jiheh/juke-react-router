'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import AppContainer from './containers/AppContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import AlbumContainer from './containers/AlbumContainer';
import ArtistContainer from './containers/ArtistContainer';
import SongsContainer from './containers/SongsContainer';

// On Enter Hooks
import {fetchAndGoToAlbum} from '../react/action-creators/albums';
import { fetchAndGoToArtist } from '../react/action-creators/artists';


const getAlbum = (album) => store.dispatch(fetchAndGoToAlbum({id: album.params.albumId}));

const getArtist = (artist) => store.dispatch(fetchAndGoToArtist({id: artist.params.artistId}));
//

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={AlbumsContainer}/>
        <Route path="/albums" component={AlbumsContainer}/>
        <Route path="/artists" component={ArtistsContainer}/>
        <Route path="/albums/:albumId" component={AlbumContainer} onEnter={getAlbum} />
        <Route path="/artists/:artistId" component={ArtistContainer} onEnter={getArtist} >
          <Route path="albums" component={AlbumsContainer}/>
          <Route path="songs" component={SongsContainer}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

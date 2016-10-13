'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default ({ selectedAlbum }) => (

  // componentDidMount() {
  //   this.props.getAlbum({id: this.props.params.albumId})
  // }

  <div className="album">
    <div>
      <h3>{ selectedAlbum.name }</h3>
      <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
    </div>
    <SongsContainer songs={ selectedAlbum.songs} />
  </div>
);

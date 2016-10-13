'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default class Album extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`/api/albums/${this.props.params.albumId}`)
    .then(res=> res.json())
    .then(album => console.log( "ALBUM", album ))
  }

  render() {
    return (
      <div className="album">
      {    console.log(this.props.params.albumId)}
        <div>
          <h3>{ selectedAlbum.name }</h3>
          <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
        </div>
        <SongsContainer songs={selectedAlbum.songs} />
      </div>
  )}
};

'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default class Album extends React.Component {

  componentDidMount() {
    this.props.getAlbum({id: this.props.params.albumId})
  }

  render() {
    return (
      <div className="album">
        <div>
          <h3>{ this.props.selectedAlbum.name }</h3>
          <img src={ this.props.selectedAlbum.imageUrl } className="img-thumbnail" />
        </div>
        <SongsContainer songs={this.props.selectedAlbum.songs} />
      </div>
  )}
};

'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import {fetchAndGoToAlbum} from '../action-creators/albums'

export default class Album extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("HI THERE!")
    fetchAndGoToAlbum({id: this.props.params.albumId})
    // fetch(`/api/albums/${this.props.params.albumId}`)
    // .then(res=> res.json())
    // .then(album => this.setState( album ))
    // .catch(error => console.error(error))
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

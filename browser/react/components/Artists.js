'use strict';

import React from 'react';
import { Link } from 'react-router';


export default class Artists extends React.Component {

  // componentDidMount() {
  //   this.props.go({id: this.props.params.artistId})
  // }

  render () {
    return (
      <div>
        <h3>Artists</h3>
          <div className="list-group">
          {
            this.props.artists && this.props.artists.map(artist => (
              <div className="list-group-item" key={ artist.id }>
                <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
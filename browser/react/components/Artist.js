'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import { Link } from 'react-router';


export default class Artist extends React.Component {

  componentDidMount() {
    this.props.getArtist({id: this.props.params.artistId})
  }

  render () {
    const { selectedArtist, children } = this.props;
    return (
            <div>
              <h3>{ selectedArtist.name }</h3>
              <ul className="nav nav-tabs">
                <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
                <li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
              </ul>
              { children && React.cloneElement(children, { selectedArtist }) }
            </div>
    );
  }
}
 // note the destructured assignment
      // <div>
      //   <h3>{ this.props.selectedArtist.name }</h3>
      //   <h3>Albums</h3>
      //   <div className="row">
      //     {
      //       this.props.selectedArtist.albums && this.props.selectedArtist.albums.map(album => (
      //         <div className="col-xs-4" key={album.id}>
      //           <Link to={`/albums/${album.id}`} className="thumbnail">
      //             <img src={ album.imageUrl } />
      //             <div className="caption">
      //               <h5>
      //                 <span>{ album.name }</span>
      //               </h5>
      //               <small>{ album.songs.length } songs</small>
      //             </div>
      //           </Link>
      //         </div>
      //       ))
      //     }
      //   </div>
      //   <SongsContainer songs={this.props.selectedArtist.songs} />
      // </div>

'use strict';

import { connect } from 'react-redux';
import Artist from '../components/Artist';
import { fetchAndGoToAlbum } from '../action-creators/albums';
import { fetchAndGoToArtist } from '../action-creators/artists';

const mapStateToProps = ({ selectedArtist }) => ({
  selectedArtist
});

const mapDispatchToProps = dispatch => ({
  go: album => dispatch(fetchAndGoToAlbum(album)),
  getArtist: artist => dispatch(fetchAndGoToArtist(artist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
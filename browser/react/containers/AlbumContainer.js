'use strict';
import {fetchAndGoToAlbum} from '../action-creators/albums';


import { connect } from 'react-redux';
import Album from '../components/Album';

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  getAlbum: album => dispatch(fetchAndGoToAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);

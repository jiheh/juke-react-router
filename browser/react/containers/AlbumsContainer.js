'use strict';

import { connect } from 'react-redux';
import Albums from '../components/Albums';
import { fetchAndGoToAlbum } from '../action-creators/albums';

const mapStateToProps = ({ albums }, ownProps) => {
  if(ownProps.selectedArtist) {
    return { albums: ownProps.selectedArtist.albums }
  } else {
    return { albums }
  }
};

const mapDispatchToProps = dispatch => ({
  go: album => dispatch(fetchAndGoToAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

'use strict';

import { connect } from 'react-redux';
import Songs from '../components/Songs';
import { startSong, pause, play } from '../action-creators/player';

const mapStateToProps = ({ isPlaying, currentSong }, { songs, selectedArtist }) => {
  if(selectedArtist) {
    return {
      isPlaying,
      currentSong,
      songs: selectedArtist.songs
    }
  } else {
    return {
      isPlaying,
      currentSong,
      songs
    }
  }
};

const mapDispatchToProps = dispatch => ({
  toggle (selectedSong, selectedSongList, currentSong, isPlaying) {
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else if (isPlaying)
      dispatch(pause());
    else
      dispatch(play());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);

import { connect } from 'react-redux';
import Player from '../../components/Player';

import {
  setPlayerOpen,
} from '../../actions';

const mapStateToProps = (state) => ({
  playerOpen: state.playerOpen,
  currentVideo: state.currentVideo,
});

const mapDispatchToProps = (dispatch) => ({
  setPlayerOpen: (playerOpen, video) => {
    dispatch(setPlayerOpen(playerOpen, video));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);

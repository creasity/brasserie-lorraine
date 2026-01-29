import { connect } from 'react-redux';
import ADN from '../../components/ADN';

import {
  setPlayerOpen,
} from '../../actions';

const mapStateToProps = (state) => ({
  displayFilter: state.filter.displayFilter,
});

const mapDispatchToProps = (dispatch) => ({
  setPlayerOpen: (playerOpen, video) => {
    dispatch(setPlayerOpen(playerOpen, video));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ADN);

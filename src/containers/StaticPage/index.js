import { connect } from 'react-redux';
import StaticPage from '../../components/StaticPage';

import {
  resetGsap,
} from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  resetGsap: (displayFilter) => {
    dispatch(resetGsap(displayFilter));
  },
});

export default connect(null, mapDispatchToProps)(StaticPage);

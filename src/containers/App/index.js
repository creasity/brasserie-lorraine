import { connect } from 'react-redux';
import App from '../../components/App';

import {
  initLang,
} from '../../actions';

const mapStateToProps = (state) => ({
  menuOpen: state.menuOpen,
  displayFilter: state.filter.displayFilter,
  isInitLang: state.isInitLang,
});

const mapDispatchToProps = (dispatch) => ({
  initLang: () => {
    dispatch(initLang());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

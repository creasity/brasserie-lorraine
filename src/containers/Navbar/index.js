import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';

import {
  setMenuOpen,
} from '../../actions';

const mapStateToProps = (state) => ({
  menuOpen: state.menuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuOpen: (menuOpen) => {
    dispatch(setMenuOpen(menuOpen));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

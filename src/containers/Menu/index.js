import { connect } from 'react-redux';
import Menu from '../../components/Menu';

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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

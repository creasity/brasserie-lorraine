import { connect } from 'react-redux';
import Histoires from '../../components/Histoires';

const mapStateToProps = (state) => ({
  displayFilter: state.filter.displayFilter,
});

export default connect(mapStateToProps)(Histoires);

import { connect } from 'react-redux';
import Mood from '../../components/Mood';

const mapStateToProps = (state) => ({
  displayFilter: state.filter.displayFilter,
});

export default connect(mapStateToProps)(Mood);

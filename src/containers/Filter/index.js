import { connect } from 'react-redux';
import Filter from '../../components/Filter';

import {
  submitFilter,
  handleChangeInputFilter,
  handleKeyDownInputFilter,
} from '../../actions';

const mapStateToProps = (state) => ({
  submitButtonON: state.filter.submitButtonON,
  filterFirstNumValue: state.filter.first,
  filterSecondNumValue: state.filter.second,
  filterThirdNumValue: state.filter.third,
  filterFourthNumValue: state.filter.fourth,
  indication: state.filter.indication,
  displayFilter: state.filter.displayFilter,
});

const mapDispatchToProps = (dispatch) => ({
  submitFilter: () => {
    dispatch(submitFilter());
  },
  handleChangeInputFilter: (fieldName, fieldValue) => {
    dispatch(handleChangeInputFilter(fieldName, fieldValue));
  },
  handleKeyDownInputFilter: (fieldName, code) => {
    dispatch(handleKeyDownInputFilter(fieldName, code));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

import { connect } from 'react-redux';
import FunZone from '../../components/FunZone';

import { handleChangeInput, successFormFunZone } from '../../actions';

const mapStateToProps = (state) => ({
  prenomValue: state.funZone_form.prenomValue,
  nomValue: state.funZone_form.nomValue,
  emailValue: state.funZone_form.emailValue,
  telValue: state.funZone_form.telValue,
  displayFilter: state.filter.displayFilter,
  displayPopup: state.funZone_form.pop_up,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeInput: (fieldName, fieldValue, section) => {
    dispatch(handleChangeInput(fieldName, fieldValue, section));
  },
  successFormFunZone: (display) => {
    dispatch(successFormFunZone(display));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FunZone);

import { connect } from 'react-redux';
import Contact from '../../components/Contact';

import { handleChangeInput } from '../../actions';

const mapStateToProps = (state) => ({
  nomValue: state.contact.nomValue,
  prenomValue: state.contact.prenomValue,
  objetValue: state.contact.objetValue,
  messageValue: state.contact.messageValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeInput: (fieldName, fieldValue, section) => {
    dispatch(handleChangeInput(fieldName, fieldValue, section));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

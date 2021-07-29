import { connect } from 'react-redux';

import Field from '../../../components/Login/Field';
import { onInputChange } from '../../../store/reducer';


const mapStateToProps = null;

const mapDispatchToProps = Dispatch => ({
  InputChange: (name, value) => {
    Dispatch(onInputChange(name, value));
  },
});

const FieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Field);

export default FieldContainer;

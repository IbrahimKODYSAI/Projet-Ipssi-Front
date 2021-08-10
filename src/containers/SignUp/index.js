// imports NPM
import { connect } from 'react-redux';

// imports locaux
import SignUp from '../../components/SignUp';
import { onSubmitRegister } from '../../store/reducer';

const mapStateToProps = state => ({
  registerLastName: state.registerLastName,
  registerFirstName: state.registerFirstName,
  registerUserName: state.registerUserName,
  registerEmail: state.registerEmail,
  registerPassword: state.registerPassword,
  registerPasswordConfirm: state.registerPasswordConfirm,

});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => {
    dispatch(onSubmitRegister());
  },
});

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// export
export default SignUpContainer;

// imports NPM
import { connect } from 'react-redux';

// imports locaux
import SignUp from '../../components/SignUp';
import { onSubmitRegister } from '../../store/reducer';

const mapStateToProps = state => ({
  registerEmail: state.registerEmail,
  registerPassword: state.registerPassword,
  registerUserName: state.registerUserName,
  registerLastName: state.registerLastName,
  registerFirstName: state.registerFirstName,

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

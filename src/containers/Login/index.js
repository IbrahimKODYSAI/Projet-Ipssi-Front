import { connect } from 'react-redux';

import Login from '../../components/Login';
import { onSubmitLogin } from '../../store/reducer';

const mapStateToProps = state => ({
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => {
    dispatch(onSubmitLogin());
  },
});


const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;

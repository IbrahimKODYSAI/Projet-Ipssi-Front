// imports NPM
import { connect } from 'react-redux';

// imports locaux
import UserInfo from 'components/User/UserInfo';
import { getUserInfo } from 'store/reducer';


const mapStateToProps = state => ({
  firstName: state.userInfo.firstName,
  lastName: state.userInfo.lastName,
  userName: state.userInfo.userName,
  email: state.userInfo.email,
  avatar: state.userInfo.avatar,
});

const mapDispatchToProps = dispatch => ({
  userInfo: () => {
    dispatch(getUserInfo());
  },
});

const UserInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfo);

// export
export default UserInfoContainer;

import { connect } from 'react-redux';
import User from 'components/User';
import { getUserInfo } from 'store/reducer';


const mapStateToProps = state => ({
  isAdmin: state.userInfo.isAdmin,
  avatar: state.userInfo.avatar
});

const mapDispatchToProps = dispatch => ({
  userInfo: () => {
    dispatch(getUserInfo());
  },
});

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);

export default UserContainer;

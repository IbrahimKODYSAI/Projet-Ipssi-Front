import { connect } from 'react-redux';
import AdminPanel from 'components/AdminPanel';
import { getUserInfo, getAllProducts, getAllUsers } from 'store/reducer';


const mapStateToProps = state => ({
  isAdmin: state.userInfo.isAdmin,
  avatar: state.userInfo.avatar,
  products: state.products,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => {
    dispatch(getAllProducts());
  },
  userInfo: () => {
    dispatch(getUserInfo());
  },
  getUsers: () => {
    dispatch(getAllUsers());
  },
});

const AdminPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanel);

export default AdminPanelContainer;

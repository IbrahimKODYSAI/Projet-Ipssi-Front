import { connect } from 'react-redux';
import User from '../../components/User';
// import { setActiveItemUserMenu } from '../../store/reducer';


const mapStateToProps = state => ({
  activeItemUserMenu: state.activeItemUserMenu,
});

const mapDispatchToProps = {
  activeItem: () => {
    return {
      type: 'SET_ACTIVE_ITEM_USER_MENU'
    }
  }
};

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);

export default UserContainer;

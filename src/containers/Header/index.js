import { connect } from "react-redux";

import Header from "components/Header";
import { onInputChange, setFoundProduct, setToggleSideDrawer, getUserInfo } from "store/reducer";

const mapStateToProps = (state) => ({
  inputSearchValue: state.inputSearchValue,
  products: state.products,
  foundProducts: state.foundProducts,
  toggleSideDrawer: state.toggleSideDrawer,
  userInfos: state.userInfo,
  cartItems: state.cartItems
});

const mapDispatchToProps = (Dispatch) => ({
  inputChange: (name, value) => {
    Dispatch(onInputChange(name, value));
  },
  setFoundedProduct: (foundProducts) => {
    Dispatch(setFoundProduct(foundProducts));
  },
  setToggleSideDrawer: (valuetrue) => {
    Dispatch(setToggleSideDrawer(valuetrue))
},
  getUserInfo: () => {
    Dispatch(getUserInfo());
  },
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;

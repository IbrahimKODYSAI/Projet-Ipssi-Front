import { connect } from "react-redux"

import BergerMenu from "components/Header/BergerMenu";

import {
  setToggleSideDrawer,
  getUserInfo,
  onInputChange,
  setFoundProduct
} from "store/reducer"

const mapStateToProps = (state) => ({
  inputSearchValue: state.inputSearchValue,
  products: state.products,
  foundProducts: state.foundProducts,
  toggleSideDrawer: state.toggleSideDrawer,
  userInfos: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  inputChange: (name, value) => {
    dispatch(onInputChange(name, value));
  },
  setFoundedProduct: (foundProducts) => {
    dispatch(setFoundProduct(foundProducts));
  },
    setToggleSideDrawer:(valuetrue) => {
        dispatch(setToggleSideDrawer(valuetrue))
    },
    userInfo: () => {
      dispatch(getUserInfo());
    },
})

const BergerMenuContainer = connect(mapStateToProps, mapDispatchToProps)(BergerMenu)

export default BergerMenuContainer;
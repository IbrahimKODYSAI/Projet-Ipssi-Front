import { connect } from "react-redux";

import Header from "components/Header";
import { onInputChange, setFoundProduct } from "store/reducer";

const mapStateToProps = (state) => ({
  inputSearchValue: state.inputSearchValue,
  products: state.products,
  foundProducts: state.foundProducts,
});

const mapDispatchToProps = (Dispatch) => ({
  inputChange: (name, value) => {
    Dispatch(onInputChange(name, value));
  },
  setFoundedProduct: (foundProducts) => {
    Dispatch(setFoundProduct(foundProducts));
  },
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;

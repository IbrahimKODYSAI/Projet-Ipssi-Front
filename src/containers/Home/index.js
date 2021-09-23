import { connect } from "react-redux";

import Home from "components/Home";
import { setSortedProducts, getAllProducts } from "store/reducer";

const mapStateToProps = (state) => ({
  products: state.products,
  sortedProducts: state.sortedProducts,
});

const mapDispatchToProps = (dispatch) => ({
  setSortedProducts: (sortProducts) => {
    dispatch(setSortedProducts(sortProducts));
  },
  getProducts: () => {
    dispatch(getAllProducts());
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;

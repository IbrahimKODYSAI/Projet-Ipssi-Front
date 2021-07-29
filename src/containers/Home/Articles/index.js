import { connect } from "react-redux";

import Articles from "components/Home/Articles";
import { setSortedProducts } from "store/reducer";

const mapStateToProps = (state) => ({
  products: state.products,
  sortedProducts: state.sortedProducts,
});

const mapDispatchToProps = (dispatch) => ({
  setSortedProducts: (sortProducts) => {
    dispatch(setSortedProducts(sortProducts));
  },
});

const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);

export default ArticlesContainer;

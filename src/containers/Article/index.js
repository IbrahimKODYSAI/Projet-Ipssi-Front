import { connect } from "react-redux";

import Article from "components/Article";

import { setOneProduct, setActiveItem, setRatingValue } from "store/reducer";

const mapStateToProps = (state) => ({
  products: state.products,
  oneProduct: state.oneProduct,
  activeItemIndex: state.activeItemIndex,
  rating: state.rating,
});

const mapDispatchToProps = (dispatch) => ({
  setItem: (index) => {
    dispatch(setActiveItem(index));
  },
  setOneProduct: (oneProductFound) => {
    dispatch(setOneProduct(oneProductFound));
  },
  setRating: (ratingValue, productId) => {
    dispatch(setRatingValue(ratingValue, productId));
  },
});

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);

export default ArticleContainer;

import { connect } from "react-redux";

import Article from "components/Article";

import {
  setActiveItem,
  setRatingValue,
  getOneProduct,
  onInputChange,
  onSubmitCemmentary,
  getOneProductCommentaries,
  getAllProducts,
  setCartItems
} from "store/reducer";

const mapStateToProps = (state) => ({
  oneProduct: state.oneProduct,
  activeItemIndex: state.activeItemIndex,
  rating: state.rating,
  newComment: state.newComment,
  commentList: state.commentList,
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  getOneProduct:(productId) => {
    dispatch(getOneProduct(productId))
  },
  getOneProductCommentaries:(productId) => {
    dispatch(getOneProductCommentaries(productId))
  },
  onSubmitCemmentary: () => {
    dispatch(onSubmitCemmentary())
  },
  setItem: (index) => {
    dispatch(setActiveItem(index));
  },
  setRating: (ratingValue, productId) => {
    dispatch(setRatingValue(ratingValue, productId));
  },
  onInputChange: (name, value) => {
    dispatch(onInputChange(name, value));
  },
  getProducts: () => {
    dispatch(getAllProducts());
  },
  setCartItem:(item) => {
    dispatch(setCartItems(item))
}
});

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);

export default ArticleContainer;

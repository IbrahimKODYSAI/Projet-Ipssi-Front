import { connect } from "react-redux";

import Article from "components/Article";

const mapStateToProps = (state) => ({
  oneProduct: state.oneProduct,
  activeItemIndex: state.activeItemIndex,
  rating: state.rating,
  newComment: state.newComment,
  commentList: state.commentList,
  cartItems: state.cartItems
});

const mapDispatchToProps = {
  AddCartItems: (cart) => {
    return {
      type: 'SET_CART_ITEMS',
      cart
    }
  },
  onSubmitCart: () => {
    return {
      type: 'ON_SUBMIT_CART'
    }
  },
  getOneProduct: (productId) => {
    return {
      type: 'GET_ONE_PRODUCT',
      productId
    }
  },
  getOneProductCommentaries: (productId) => {
    return {
      type: 'GET_ONE_PRODUCT_COMMENTARIES',
      productId
    }
  },
  onSubmitCemmentary: () => {
    return {
      type: 'ON_SUBMIT_COMMENTARY'
    }
  },
  setItem: (index) => {
    return {
      type: 'SET_ACTIVE_ITEM',
      index
    }
  },
  setRating: (ratingValue, productId) => {
     return {
      type: 'SET_RATING_PRODUCT',
      ratingValue,
      productId,
     }
  },
  onInputChange: (name, value) => {
    return {
      type: 'ON_INPUT_CHANGE',
      name,
      value,
    }
  },
  getProducts: () => {
    return {
      type: 'GET_ALL_PRODUCTS',
    }
  },

}

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);

export default ArticleContainer;






// const mapDispatchToProps = (dispatch) => ({
//   getOneProduct:(productId) => {
//     dispatch(getOneProduct(productId))
//   },
//   getOneProductCommentaries:(productId) => {
//     dispatch(getOneProductCommentaries(productId))
//   },
//   onSubmitCemmentary: () => {
//     dispatch(onSubmitCemmentary())
//   },
//   setItem: (index) => {
//     dispatch(setActiveItem(index));
//   },
//   setRating: (ratingValue, productId) => {
//     dispatch(setRatingValue(ratingValue, productId));
//   },
//   onInputChange: (name, value) => {
//     dispatch(onInputChange(name, value));
//   },
//   getProducts: () => {
//     dispatch(getAllProducts());
//   },
//   AddCartItems: (qty) => {
//     dispatch(setCartItems(qty))
// }
// });
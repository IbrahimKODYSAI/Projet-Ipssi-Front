import { connect } from "react-redux";

import Cart from "components/Cart";

import { removeProduct, setCartItemQty, setCartItemQtyMinus, onSubmitCart } from "store/reducer";

const mapStateToProps = (state)=> ({
    cart: state.cartItems
});


const mapDispatchToProps = (dispatch) => ({
    removeProduct:(product) => {
        dispatch(removeProduct(product))
    },
    setCartItemQty:(cart) => {
        dispatch(setCartItemQty(cart))
    },
    setCartItemQtyMinus:(cart) => {
        dispatch(setCartItemQtyMinus(cart))
    },
    onSubmitCart:() => {
        dispatch(onSubmitCart())
    }
})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
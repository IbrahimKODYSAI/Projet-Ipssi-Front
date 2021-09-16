import { connect } from "react-redux";

import Cart from "components/Cart";

import { setCartItems, onSubmitCart } from "store/reducer";

const mapStateToProps = (state)=> ({
    cart: state.cartItems
});


const mapDispatchToProps = (dispatch) => ({
    setCartItems:(cart) => {
        dispatch(setCartItems(cart))
    },
    onSubmitCart:() => {
        dispatch(onSubmitCart())
    }
})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
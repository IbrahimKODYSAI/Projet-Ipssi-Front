import { connect } from "react-redux";

import Cart from "components/Cart";

import { setCartItems } from "store/reducer";

const mapStateToProps = (state)=> ({
    cart: state.cart
});


const mapDispatchToProps = (dispatch) => ({
    setCartItem:(item) => {
        dispatch(setCartItems(item))
    }
})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
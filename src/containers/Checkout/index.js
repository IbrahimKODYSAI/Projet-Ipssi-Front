import { connect } from "react-redux";

import Checkout from "components/Checkout";

import { setCartItems } from "store/reducer";

const mapStateToProps = (state)=> ({
    cartItems: state.cartItems
});


const mapDispatchToProps = (dispatch) => ({
    setCartItems:(cart) => {
        dispatch(setCartItems(cart))
    }
})

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default CheckoutContainer;
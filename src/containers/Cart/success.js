import { connect } from "react-redux";

import Success from "components/Cart/success";

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

const SuccessContainer = connect(mapStateToProps, mapDispatchToProps)(Success);

export default SuccessContainer;
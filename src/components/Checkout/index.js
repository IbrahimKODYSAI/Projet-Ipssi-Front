import React, { useEffect } from 'react'
// import CheckoutForm from './CheckoutForm'
import './checkout.scss'
import StripeCheckout from './StripeCheckout';


const Checkout = ({ cartItems, setCartItems }) => {

    const getLocalCart = localStorage.getItem("cart");

    useEffect(() => {
        let localCart = JSON.parse(getLocalCart);
        if (localCart) setCartItems(localCart)
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const allPrices = cartItems.map((item) => item.price * item.quantity)
    var TotalPrice = allPrices.reduce(function(a, b) { return a + b; }, 0).toFixed(2);
    
    const allQty = cartItems.map((item) => item.quantity)
    var itemsQty = allQty.reduce((a, b) => { return a + b; }, 0);

    return (
        <div className="checkout">
            <h2>Checkout Summary</h2>
            <h3>{`Total Items: ${itemsQty}`}</h3>
            <h4>{`Total Price: ${TotalPrice} €`}</h4>

            <StripeCheckout 
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
        </div>
    )
}

export default Checkout
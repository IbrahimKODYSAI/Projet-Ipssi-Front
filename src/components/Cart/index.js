import React from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import './cart.scss'


const Cart = ({
    cart,
    onSubmitCart,
    setCartItems,
}) => {

    let getLocalCart = localStorage.getItem("cart")
    
    useEffect(() => {
        let localCart = JSON.parse(getLocalCart)
        if (localCart) setCartItems(localCart)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    const allPrices = cart.map((item) => item.price * item.quantity)
    var sumPrices = allPrices.reduce(function(a, b) { return a + b; }, 0).toFixed(2);
    
    const allQty = cart.map((item) => item.quantity)
    var sumQty = allQty.reduce((a, b) => { return a + b; }, 0);

    const addProduct = async (product) => {
            let strinCopy = JSON.stringify(
                cart.map((x) =>
                    x._id === product._id
                    ? { ...product, quantity: product.quantity + 1 }
                    : x
            ))
            localStorage.setItem("cart", strinCopy)
            let getLocalCart = localStorage.getItem("cart")
            let localCart = JSON.parse(getLocalCart)
            setCartItems(localCart)
            await onSubmitCart() 
    }

    const reduceIemQty = async (product) => {
        if(product.quantity > 1) {
            let strinCopy = JSON.stringify(
                cart.map((x) =>
                    x._id === product._id
                    ? { ...product, quantity: product.quantity - 1 }
                    : x
            ))
            localStorage.setItem("cart", strinCopy)
            let getLocalCart = localStorage.getItem("cart")
            let localCart = JSON.parse(getLocalCart)
            setCartItems(localCart)
        }
        await onSubmitCart()
    }
    const handleRemoveItem = async (product) => {

        const existItem = cart.find((item) => item._id === product._id)
        if(!existItem) return

        let strinCopy = JSON.stringify(cart.filter((x) => x._id !== product._id))
        localStorage.setItem("cart", strinCopy)
        let getLocalCart = localStorage.getItem("cart")
        let localCart = JSON.parse(getLocalCart)
        setCartItems(localCart)

        await onSubmitCart()
    }

    return (
        <div>
            {cart.length === 0 &&
                <div className="cart-items-empty">
                    Empty
                </div>
            }
            <div className="cart_items-header">
                <h2>Shopping Cart</h2>
            </div>
            
            <div className="cartscreen">
                <div className="cartscreen_left">
                    {
                        cart.map((item) =>
                            <div className="cartitem" key={item._id}>
                                <div className="cartitem_image">
                                    <img src={`http://localhost:3001/${item.images}`} alt={item.name} />
                                </div>
                                <Link to={`/article/${item._id}`} exact="true">
                                    <p className="cartitem_name">{item.name}</p>
                                </Link>
                                <p className="cartitem_price">{item.price} €</p>
                                <div className="cartitem_select">
                                    <i className="fas fa-plus-square cartitem_select_plus" onClick={(e) => addProduct(item)}></i>
                                    <span>{item.quantity}</span>
                                    <i className="fas fa-minus-square cartitem_select_minus" onClick={(e) => reduceIemQty(item)}></i>
                                </div>
                                <button className="cartitem_deleteBtn"><i className="fa fa-trash" onClick={(e) => handleRemoveItem(item)}></i></button>
                            </div>
                    )}
                </div>
                <div className="cartscreen_right">
                    <div className="cartscreen_info">
                        <p>Total ({sumQty}) articles</p>
                        <p>{sumPrices} €</p>
                    </div>
                    <div>
                        <Link to="cart/checkout" exact="true">
                            <button>Paiement</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart;



// const productExist = state.cartItems.find((x) => x._id === product._id);
// if(productExist.quantity === 1) {
//     const cartItems = state.cartItems.filter((x) => x._id !== product._id)
//     return {
//       ...state,
//       cartItems
//     }
// } else {
//     const cartItems = state.cartItems.map((item) => item._id === product._id ? item.quantity -- : null)
//     return {
//       ...state,
//       cartItems
//     }
// }
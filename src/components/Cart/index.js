import React from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios'

import './cart.scss'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

toast.configure()

const Cart = ({
    cart,
    onSubmitCart,
    setCartItems,
}) => {

    let getLocalCart = localStorage.getItem("cart")
    
    useEffect(() => {
        let localCart = JSON.parse(getLocalCart)
        if (localCart) setCartItems(localCart)
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const stripe = useStripe();

    
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
        toast.success("product supprimer du panier", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000
        })
    }

    const handleGuestCheckout = async (e) => {
        e.preventDefault();
        const line_items = cart.map(item => {
          return {
            quantity: item.quantity,
            price_data: {
              currency: 'eur',
              unit_amount: item.price * 100, // amount is in cents
              product_data: {
                name: item.name,
                description: item.title,
                images: item.images[0].filePath, 
              }
            }
          }
        });

        await axios.request({
            url: 'http://localhost:3001/api/user/create-checkout-session',
            method: 'post',
            data: {
                line_items,
            },
            headers: {
                Authorization: JSON.parse(sessionStorage.getItem('token'))
            }
        })
        .then((response) => {
            console.log(response);
            const { sessionId } = response.data;
            const { error } = stripe.redirectToCheckout({
                sessionId
            });
            if (error) {
                console.log(error);
            }

        })
        .catch((error) => {
            console.log(error.response);

        });

    }

    return (
        <div>
            <div className="cart_items-header">
                <h2>Mon panier</h2>
            </div>
            {cart.length === 0 &&
                <div className="cart-items-empty">
                    <h1>est vide</h1>
                </div>
            }
            
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
                        <button onClick={handleGuestCheckout}>Paiement</button>
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
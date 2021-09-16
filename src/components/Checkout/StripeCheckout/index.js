import React, { useState, useEffect } from 'react'
import { useStripe } from '@stripe/react-stripe-js';

import axios from 'axios'

import './stripeCheckout.scss'

const StripeCheckout = ({ cartItems, setCartItems }) => {

    const getLocalCart = localStorage.getItem("cart");

    useEffect(() => {
        let localCart = JSON.parse(getLocalCart);
        if (localCart) setCartItems(localCart)
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [email, setEmail] = useState('saneda.i@live.fr');
    const stripe = useStripe();

    const handleGuestCheckout = async (e) => {
        e.preventDefault();
        const line_items = cartItems.map(item => {
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
        <form onSubmit={handleGuestCheckout}>
            {/* <div>
                <input 
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                    value={email}
                    className='nomad-input'
                />
            </div> */}
            <div className='submit-btn'>
                <button type='submit' className='button is-black nomad-btn submit'>
                    Checkout
                </button>
            </div>
        </form>
    )
}

export default StripeCheckout;
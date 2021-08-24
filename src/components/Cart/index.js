import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './cart.scss'


const Cart = ({ cart }) => {

    const allPrices = cart.map((item) =>
        item.price
    )
    var sum = allPrices.reduce(function(a, b) { return a + b; }, 0);

    return (
        <div>
            {cart.length === 0 &&
                <div className="cart-items-empty">
                    no items are added
                </div>
            }
            <div className="cart_items-header">
                <h2>Shopping Cart</h2>
            </div>
            
            <div className="cartscreen">
                <div className="cartscreen_left">
                    {
                        cart.map((item) =>
                            <div className="cartitem">
                                <div key={item._id} className="cartitem_image">
                                    <img src={`http://localhost:3001/${item.images[0].filePath}`} alt={item.name} />
                                </div>
                                <Link to={`/article/${item._id}`} exact="true">
                                    <p className="cartitem_name">{item.name}</p>
                                </Link>
                                <p className="cartitem_price">{item.price} €</p>
                                <select className="cartitem_select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <button className="cartitem_deleteBtn"><i className="fa fa-trash"></i></button>
                            </div>
                    )}
                </div>
                <div className="cartscreen_right">
                    <div className="cartscreen_info">
                        <p>Subtotal ({cart.length}) items</p>
                        <p>{sum} €</p>
                    </div>
                    <div><button>Paiement</button></div>
                </div>
            </div>

        </div>
    )
}

export default Cart;
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import "./userhistory.scss"



const UserHistory = () => {

    const [userOrders, setUserOrders] = useState([])

    useEffect(() => {
        (async () => {
            await axios.request({
                url: 'http://localhost:3001/api/orders/user_orders',
                method: 'get',
                headers: {
                    Authorization: JSON.parse(sessionStorage.getItem('token'))
                }
            })
            .then((response) => {
                setUserOrders(response.data)

            })
            .catch((error) => {
                console.log(error.message)
            })
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="orders">
            <h1 className="orders-title">
               Historique de commandes
            </h1>
            <div>
                {
                    userOrders.map((order) =>
                        <div className="orders-container" key={order._id}>
                            <div className="orders-container_header">
                                <p>N° de commande : <span className="orders-container_header_num">{order._id}</span></p>
                                <p>statut de la commande : <span>En préparation</span></p>
                                <p>Montant de la commande : <span className="orders-container_header_price">{order.amount_total} €</span></p>
                            </div>
                            <div className="orders-container_list">{
                                order.products.map((product) => 
                                    <div key={product.name} className="orders-container_list_product">
                                        <div>
                                            <p>{product.name}</p>
                                        </div>
                                        <div>
                                            <p>prix : {product.price} €</p>
                                        </div>
                                        <div>
                                            <p>quantité : {product.quantity}</p>
                                        </div>
                                    </div>
                                )
                            }</div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UserHistory;
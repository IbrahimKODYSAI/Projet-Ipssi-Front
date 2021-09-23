import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./orders.scss"

const Orders = () => {

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        (async () => {
            await axios.request({
                url: 'http://localhost:3001/api/orders',
                method: 'get',
                headers: {
                    Authorization: JSON.parse(sessionStorage.getItem('token'))
                }
            }).then((response) => {
                setAllOrders(response.data)
            }).catch((error) => {
                console.log(error.message)
            })
        })()
    },[])

    const [inputValue, setInputValue] = useState("")
    const [foundedOrders, setFoundedOrders] = useState(allOrders)

    const handleOnInputChange = (event) => {
        const { value: fieldValue } = event.target;
        setInputValue(fieldValue)

        const foundOrders = allOrders.filter((order, index) =>
          order._id.includes(fieldValue)
        );

        if(fieldValue === "") {
            setFoundedOrders(allOrders);
            // setProductsCat([]);
        }else{

            setFoundedOrders(foundOrders);
            // setProductsCat(foundProductByCat)
        }
    };

    const clearInput = () => {
        setFoundedOrders([]);
        // setProductsCat([]);
        setInputValue("")
    }

    return (
        <div className="adminOrders">
            <h1>Toute les commandes</h1>
            <div className="adminOrders-searchInputs">
                <input
                    type="text"
                    placeholder="N° de commande..."
                    autoComplete="off"
                    name="inputSearchValue"
                    value={inputValue}
                    onChange={(event) => handleOnInputChange(event)}
                />
                <div className="adminOrders-searchInputs_searchIcon">
                    {foundedOrders.length === 0 ?
                        <i className="fa fa-search"></i> :
                        <i className="fa fa-times" onClick={clearInput}></i>
                    }
                </div>
            </div>
            {
                foundedOrders.map((order, index) => {
                    return <div className="adminOrders-result" key={order._id}>
                                <h2>N° de commande : <span>{order._id}</span></h2>    
                                <div>
                                    <input id="validée" defaultChecked type="radio" value="Validée" name="statut" /> Validée
                                    <input id="En préparation" type="radio" value="En préparation" name="statut" /> En préparation
                                    <input id="Expédiée" type="radio" value="Expédiée" name="statut" /> Expédiée
                                </div>
                            </div>
                })
            }
         
        </div>
    )
}

export default Orders;
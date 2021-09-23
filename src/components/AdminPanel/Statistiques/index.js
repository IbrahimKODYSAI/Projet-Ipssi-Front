
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./statistique.scss"


const Statistiques = ({getUsers, users, listProduct, allProducts}) => {
    
    const [allOrders, setAllOrders] = useState([]);
    const [chiffreAffaire, setChiffreAffaire] = useState([]);
    
    
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
                const allPrices = response.data.map((order) => {
                    const newOrders = order.amount_total
                    return newOrders
                });
                setChiffreAffaire(allPrices.reduce(function(a, b) { return a + b; }, 0).toFixed(2));
            }).catch((error) => {
                console.log(error.message)
            })
        })();
        getUsers();
        listProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



     return (
        <div className="containerStat">
            <h1 className="containerStat-title">Les stats de la boutique</h1>
            
            <div className="containerStat-block">
                <p>Chiffre d'affaire : </p>
                <span>{chiffreAffaire} €</span>
            </div>
            <div className="containerStat-block">
                <p>Nombre de commandes : </p>
                <span>{allOrders.length}</span>
            </div>
            <div className="containerStat-block">
                <p>Nombre produits en vente : </p>
                <span>{allProducts.length}</span>
            </div>
            <div className="containerStat-block">
                <p>Nombre de clients inscrits : </p>
                <span>{users.length}</span>
            </div>
        </div>

     )
}


export default Statistiques;

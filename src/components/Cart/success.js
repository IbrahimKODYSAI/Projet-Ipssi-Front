import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './cart.scss'

const Success = ({ setCartItems }) => {

    useEffect(() => {
        localStorage.removeItem('cart');
        setCartItems([])
    //     (async () => {
    //         await axios.request({
    //             url: 'http://localhost:3001/api/orders/current_order',
    //             method: 'post',
    //           }).then(response => {
    //               console.log(response.data)
    //           }).catch(error => {
    //               console.error(error.message);
    //           })
    //    })();
    }, [])

    return (
        <div className="success">
            <h1>Merci pour votre commande</h1>
            <p>
                Nous traitons actuellement votre commande
                un e-mail de confirmation vous sera envoyé sous peu
            </p>
            <p>Vous pouvez voir votre commande dans votre profil utilisateur en allant dans ➔ Mes commandes</p>
            <Link to="/" exact="true">
                <button className="retour">
                    Continuer votre shopping
                </button>
            </Link>
        </div>
    )
}

export default Success
import React from 'react';
import { Link } from "react-router-dom";
import './cart.scss'

const Canceled = () => {
  return (

      <div className="success">
        <h1>Échec de la transaction</h1>
        <p>Veuillez réessayer, vos articles sont toujours dans le panier</p>
        <div>
        <Link to="/" exact="true">
                <button className="retour">
                    Continuer votre shopping
                </button>
            </Link>
        </div>
      </div>
  );
}

export default Canceled;
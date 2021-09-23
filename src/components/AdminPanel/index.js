import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import "./adminpanel.scss";

import AddProductAdmin from 'containers/AdminPanel/AddProductAdmin';
import ProductManagement from "./ProductManagement";
import UsersManagement from "./UsersManagement";
import Statistiques from "./Statistiques";
import Orders from "./Orders";

const User = ({userInfo, getUsers, getProducts, products, users, isAdmin, avatar}) => {

  useEffect(() => {
    userInfo();
    getProducts();
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const menuItems = [
    {
      component: <ProductManagement
      allProducts={products}
      listProduct={getProducts}
      />, 
      title: "Gestion des produits"
    },
    {
      component: <UsersManagement
      getUsers={getUsers}
      users={users}
      />,
      title: "Gestion des Utilisateurs"
    },
    {component: <AddProductAdmin />, title: "Ajouter un produit"},
    {component: <Orders />, title: "Commandes client"},
    {
      component: <Statistiques
      getUsers={getUsers}
      users={users}
      allProducts={products}
      listProduct={getProducts}
      />,
      title: "Statistiques"
    },


  ]

  const [showContent, setShowContent] = useState(menuItems[0].title);

  const [ menuItemIndex, setMenuItemIndex] = useState(0)

  return (
    isAdmin && (

    <div>
      {JSON.parse(sessionStorage.getItem("token")) && (
        <div>
          <div className="wrapper">
            <div className="wrapper-header">
              <Link to="/user/Avatar" exact="true">
                <div className="wrapper-header_avatar">
                  <div className="wrapper-header_avatar_dl">
                    <span>mettre à jour</span>
                  </div>
                    <img src={`http://localhost:3001/${avatar[0].filePath}`} alt="xxxx" />
                </div>
              </Link>
              <div>
                <img
                  className="wrapper-header_img"
                  src="img/banner.jfif"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="user-page">
            <div className="user-page_links">
              <Link to="/user" exact="true">
                <button 
                  className="bkg-white"
                >
                  My profile
                </button>
              </Link>
              {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {e.preventDefault(); setShowContent(item.title) ; setMenuItemIndex(index)} }
                className={showContent === item.title ? "bkg-green" : "bkg-white"}
              >
                {item.title}
              </button>
              ))}
            </div>
            <div className="user-page_content">
              {menuItems[menuItemIndex].component}
            </div>
          </div>
        </div>
      )}
      {!JSON.parse(sessionStorage.getItem("token")) && (
        <div>
          <h1 className="error">YOU ARE NOT L0GIN </h1>
          <img id="logo" src="/" alt="" />
          <div>
            <Link to="/login" exact>
              {" "}
              <h1>Please Sign in to Access your account</h1>{" "}
            </Link>
            <h3>Or</h3>
            <Link className="link2" to="/" exact>
              {" "}
              <h1>Return to Home</h1>{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
    )
  );
};
export default User;

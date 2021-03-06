import React from "react";
import { Route } from "react-router";

// import { useState, useEffect } from "react";
import Home from "containers/Home";
import Header from "containers/Header";
import ForgottenPassword from "components/ForgottenPassword";
import Footer from "components/Footer";
import Legal from "components/Legal";
import SignUp from "containers/SignUp";
import Login from "containers/Login";
import Contact from "containers/Contact";
import User from "containers/User";
import AdminPanel from "containers/AdminPanel";
import Article from "containers/Article";
import Cart from "containers/Cart"
import BergerMenu from "containers/BergerMenu"

import "../App/app.scss";
import "../../styles/utils.scss";
import Success from "containers/Cart/success"
import Canceled from "components/Cart/canceled";

export default function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <BergerMenu />
      </div>
      <main className="p-dg">
        <Route path="/" exact component={Home} />
        <Route path="/article/:id" exact component={Article} />
        <Route path="/cart" exact component={Cart}/>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/user" component={User} />
        <Route path="/forgotten-password" exact component={ForgottenPassword} />
        <Route path="/mention_legale" exact component={Legal} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/user-admin-panel" exact component={AdminPanel} />
        <Route path="/cart/checkout/success" exact component={Success} />
        <Route path="/cart/checkout/canceled" exact component={Canceled} />

      </main>
      <div className="wrapper"></div>
      <footer className="footerix">
        <Footer />
      </footer>
    </div>
  );
}

import React from "react";
import { Route } from "react-router";

// import { useState, useEffect } from "react";
import Home from "components/Home";
import Header from "containers/Header";
import ForgottenPassword from "components/ForgottenPassword";
import Footer from "components/Footer";
import Legal from "components/Legal";
import SignUp from "containers/SignUp";
import Login from "containers/Login";
import Contact from "containers/Contact";
import User from "containers/User";
import Article from "containers/Article";
import AdminPanel from "containers/AdminPanel";
import "../App/app.scss";

export default function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <main className="p-dg">
        <Route path="/" exact component={Home} />
        <Route path="/article/:id" exact component={Article} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/Login" excat component={Login} />
        <Route path="/user" component={User} />
        <Route path="/forgotten-password" exact component={ForgottenPassword} />
        <Route path="/mention_legale" exact component={Legal} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/admin" exact component={AdminPanel} />
      </main>
      <div className="wrapper"></div>
      <footer className="footerix">
        <Footer />
      </footer>
    </div>
  );
}

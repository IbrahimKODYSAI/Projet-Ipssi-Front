import React, { useEffect } from "react";
import SearChBar from "../../SearchBar";
import { Link } from "react-router-dom";


import "./sidedrawer.scss";


const SideDrawer = ({
    show,
    click,
    getUserInfo,
    userInfos,
    props,
    cartItems
}) => {
    useEffect(() => {
        getUserInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const sideDrawerClass = ["sidedrawer"];

    if(show) {
        sideDrawerClass.push("show")
    }
    const ItemQty = () => {
        if(cartItems.length > 0) {
          const allItemQty = cartItems.map((item) => item.quantity)
          return allItemQty.reduce((a, b) => {return a +b }, 0)
        }else {
          return 0
        }
      };
    return (
    
        <div className={sideDrawerClass.join(" ")}>
            <div>
                {JSON.parse(sessionStorage.getItem('token')) && (
                    <div className="sidedrawer_Button_logged" onClick={click}>
                        <Link to="/user" exact="true">
                            <div className="sidedrawer_Button_logged_img">
                                {userInfos.avatar.length > 0 && (
                                    <img src={`http://localhost:3001/${userInfos.avatar[0].filePath}`} alt="xxxx" />
                                )}
                            </div>
                        </Link>
                        <Link to="/user" exact="true">
                            <p>Bonjour {userInfos.userName}... </p>
                        </Link>
                        <p className="mail">{userInfos.email}</p>
                    </div>
                )}
                {!JSON.parse(sessionStorage.getItem('token')) && (
                    <div className="sidedrawer_Button" onClick={click}>
                        <Link to="/login" exact="true">
                            <button className="btn btn-grad1" type="button">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup" exact="true">
                            <button className="btn btn-grad" type="button">
                                Register
                            </button>
                        </Link>
                    </div>
                )}
            </div>
            <div>
                <div className="side_searchBar">
                    <SearChBar props={props}/>
                </div>
                <div className="sidedrawer_cart" onClick={click}>
                    <Link to="/cart" exact="true">
                                <i className="fa fa-shopping-cart">
                                    <span className="sidedrawer_cartbadge">{ItemQty()}</span>
                                </i>
                    </Link>
                </div>
                <ul className="sidedrawer_links">
                    <li>Electroménager</li>
                    <li><i className="fas fa-laptop"></i> High-Tech</li>
                    <li><i className="fas fa-gem"></i> Bijoux</li>
                    <li><i className="fas fa-tshirt"></i> Vêtements</li>
                </ul>
            </div>
        </div>
    )
}

export default SideDrawer;
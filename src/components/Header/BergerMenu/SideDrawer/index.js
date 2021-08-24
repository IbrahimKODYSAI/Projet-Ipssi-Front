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
}) => {
    useEffect(() => {
        getUserInfo()
    }, [])
    const sideDrawerClass = ["sidedrawer"];

    if(show) {
        sideDrawerClass.push("show")
    }

    return (
    
        <div className={sideDrawerClass.join(" ")}>
            <div>
                {JSON.parse(sessionStorage.getItem('token')) && (
                    <div className="sidedrawer_Button" onClick={click}>
                        <Link to="/user" exact="true">
                            <p>Bonjour {userInfos.userName}... </p>
                        </Link>
                        <Link to="/user" exact="true">
                            <div className="sidedrawer_Button_img">
                                <img src={`http://localhost:3001/${userInfos.avatar[0].filePath}`} alt="xxxx" />
                            </div>
                        </Link>
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
                <div className="sidedrawer_cart">
                    <Link to="/cart" exact="true">
                                <i className="fa fa-shopping-cart">
                                    <span className="sidedrawer_cartbadge">0</span>
                                </i>
                    </Link>
                </div>
                <ul className="sidedrawer_links">
                    <li>Nouveautés</li>
                    <li>Electroménager</li>
                    <li>High-Tech</li>
                    <li><i class="fa-solid fa-gem"></i>Bijoux</li>
                    <li>Vêtements</li>
                </ul>
            </div>
        </div>
    )
}

export default SideDrawer;
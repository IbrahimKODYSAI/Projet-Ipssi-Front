import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Axios from "axios";

import "./user.scss";

import UserInfo from 'containers/User/UserInfo';
import UserHistory from "./UserHistory";
import UserFavoris from "./UserFavoris";

const User = ({ userInfo, isAdmin, avatar, }) => {

  useEffect(() => {
    userInfo();
  }, []);


  const menuItems = [
    {component: <UserInfo />, title: "Informations"},
    {component: <UserHistory />, title: "Vos commandes"},
    {component: <UserFavoris />, title: "Liste d'envie"},
  ]

  const [showContent, setShowContent] = useState(menuItems[0].title);

  const [ menuItemIndex, setMenuItemIndex] = useState(0)
  const [singleImage, setSingleImage] = useState([])

  const handleImageChange = (event) => {
    setSingleImage(event.target.files[0])
}


const handleUpdateAvatar = async (e) => {
  e.preventDefault();
  
  const data = new FormData();
  data.append('file', singleImage)

  await Axios.request({
    url: 'http://localhost:3001/api/user/update/avatar',
    method: 'put',
    data,
    headers: {
      Authorization: JSON.parse(sessionStorage.getItem('token'))
    }
  }).then(response => {
      console.log(response.data)
      userInfo();
  }).catch(error => {
      console.error(error.message);
      console.error(error.response);
  })
}

  return (
    <div>
      {JSON.parse(sessionStorage.getItem("token")) && (
        <div>
          <div className="wrapper">
            <div className="wrapper-header">
                <div className="wrapper-header_avatar">
                  <div className="wrapper-header_avatar_dl">
                    <label htmlFor="file">update avatar</label>
                    <input type="file" id="file" name="file" onChange={handleImageChange}/>
                  </div>
                    {avatar && (avatar.length > 0 ) && (
                      <img src={`http://localhost:3001/${avatar[0].filePath}`} alt="xxxx" />
                    )}
                </div>
                {/* <button onClick={(e) => handleUpdateAvatar(e)}>upload</button> */}
              <div className="wrapper-header_img">
                <img
                  src="img/banner.jfif"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="user-page">
            <div className="user-page_links">
              {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {e.preventDefault(); setShowContent(item.title) ; setMenuItemIndex(index)} }
                className={showContent === item.title ? "bkg-green" : "bkg-white"}
              >
                {item.title}
              </button>
              ))}
              
              <Link to="/user-admin-panel" exact="true">
                <button 
                  className={isAdmin === true ? "show-bhutton" : "hide-button"}
                >
                  Admin Panel
                </button>
              </Link>
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
  );
};
export default User;

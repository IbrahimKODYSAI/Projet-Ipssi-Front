import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import './userinfos.scss';
import 'styles/utils.scss'

toast.configure()

const UserInfo = ({
    userInfo,
    userName,
    firstName,
    lastName,
    email,
    password
  }) => {
    const [inputValues, setInputValues] = useState({
      newUserName: userName,
      newFirstname: firstName,
      newLastname: lastName,
      newEmail: email,
      newPassword: password,
      confirmPassword: password
    })
    useEffect(() => {
      userInfo();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onInputchange = (e) => {
      const {name, value} = e.target;
      setInputValues({ ...inputValues, [name]: value })
    }

    const [showInputUserName, setShowInputUserName] = useState(false);
    const [showFirstname, setShowFirstname] = useState(false);
    const [showLastname, setShowLastname] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const showUserName = (e) => {e.preventDefault(); setShowInputUserName(!showInputUserName)}
    const showFirst = (e) => {e.preventDefault(); setShowFirstname(!showFirstname)}
    const showLast = (e) => {e.preventDefault(); setShowLastname(!showLastname)}
    const showMail = (e) => {e.preventDefault(); setShowEmail(!showEmail)}
    const showPass = (e) => {e.preventDefault(); setShowPassword(!showPassword)}

    const CloseAllTab = () => {
      setShowInputUserName(false)
      setShowFirstname(false)
      setShowLastname(false)
      setShowEmail(false)
      setShowPassword(false)
    }

    const handleUpdateUser = async (e) => {
      e.preventDefault();

      await Axios.request({
        url: 'http://localhost:3001/api/user/update',
        method: 'put',
        data:{
          username: inputValues.newUserName,
          firstname: inputValues.newFirstname,
          lastname: inputValues.newLastname,
          email: inputValues.newEmail,
          password: inputValues.newPassword,
          passwordConfirm: inputValues.confirmPassword
        },
        headers: {
          Authorization: JSON.parse(sessionStorage.getItem('token'))
        }
      }).then(response => {
        toast.success("Profile mis à jour", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        })
          userInfo();
          CloseAllTab();
      }).catch(error => {
        toast.error(error.response.data.slice(1, 50), {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        })
          console.error(error.response);
      })
    }

    return (
        <div className="userInfo">
            <ul>
              <div>
                <li className="userInfo_item">
                  <div className="userInfo_item_spanDiv">
                  <span className="infoClasse">Username</span> 
                  </div>
                  :  {userName}
                  <i 
                    className="fa fa-edit"
                    onClick={(e) => showUserName(e)}
                  ></i>
                </li>
                <div className={showInputUserName === true ? "pop-show" : "pop-hide"}>
                  <form>
                    <input
                      placeholder="New username"
                      type="text"
                      name="newUserName"
                      value={inputValues.newUserName}
                      onChange={(e) => onInputchange(e)}
                    />
                    <div className="btn2-div">
                      <button className="btn-circle btn-circle-warning" onClick={(e) => showUserName(e)}>X</button>
                      <button className="btn-circle btn-circle-success" onClick={(e) => handleUpdateUser(e)}>V</button>
                    </div>
                  </form>

                </div>
              </div>
              <div>
                <li className="userInfo_item">
                  <div className="userInfo_item_spanDiv">
                    <span className="infoClasse">Firstname</span> 
                  </div>
                  :  {firstName}
                  <i 
                    className="fa fa-edit"
                    onClick={(e) => showFirst(e)}
                  ></i>
                </li>
                <div className={showFirstname === true ? "pop-show" : "pop-hide"}>
                  <form>
                    <input
                      placeholder="New firstname"
                      type="text"
                      name="newFirstname"
                      value={inputValues.newFirstname}
                      onChange={(e) => onInputchange(e)}
                    />
                    <div className="btn2-div">
                      <button className="btn-circle btn-circle-warning" onClick={(e) => showFirst(e)}>X</button>
                      <button className="btn-circle btn-circle-success" onClick={(e) => handleUpdateUser(e)}>V</button>
                    </div>
                  </form>

                </div>
              </div>
              <div>
                <li className="userInfo_item">
                  <div className="userInfo_item_spanDiv">
                    <span className="infoClasse">Lastname</span> 
                  </div>
                  :  {lastName}
                  <i 
                    className="fa fa-edit"
                    onClick={(e) => showLast(e)}
                  ></i>
                </li>
                <div className={showLastname === true ? "pop-show" : "pop-hide"}>
                  <form>
                    <input
                      placeholder="New lastname"
                      type="text"
                      name="newLastname"
                      value={inputValues.newLastname}
                      onChange={(e) => onInputchange(e)}
                    />
                    <div className="btn2-div">
                      <button className="btn-circle btn-circle-warning" onClick={(e) => showLast(e)}>X</button>
                      <button className="btn-circle btn-circle-success" onClick={(e) => handleUpdateUser(e)}>V</button>
                    </div>
                  </form>

                </div>
              </div>
              <div>
                <li className="userInfo_item">
                  <div className="userInfo_item_spanDiv">
                    <span className="infoClasse">Email</span> 
                  </div>
                  :  {email}
                  <i 
                    className="fa fa-edit"
                    onClick={(e) => showMail(e)}
                  ></i>
                </li>
                <div className={showEmail === true ? "pop-show" : "pop-hide"}>
                  <form>
                    <input
                      placeholder="New email"
                      type="text"
                      name="newEmail"
                      value={inputValues.newEmail}
                      onChange={(e) => onInputchange(e)}
                    />
                    <div className="btn2-div">
                      <button className="btn-circle btn-circle-warning" onClick={(e) => showMail(e)}>X</button>
                      <button className="btn-circle btn-circle-success" onClick={(e) => handleUpdateUser(e)}>V</button>
                    </div>
                  </form>

                </div>
              </div>
              <div>
                <li className="userInfo_item">
                  <div className="userInfo_item_spanDiv">
                    <span className="infoClasse">Password</span> 
                  </div>
                  :  • • • • • •
                  <i 
                    className="fa fa-edit"
                    onClick={(e) => showPass(e)}
                  ></i>
                </li>
                <div className={showPassword === true ? "pop-show" : "pop-hide"}>
                  <form>
                    <input
                      placeholder="New password"
                      type="password"
                      name="newPassword"
                      value={inputValues.newPassword}
                      onChange={(e) => onInputchange(e)}
                    />
                    <input
                      placeholder="Confirm password"
                      type="password"
                      name="confirmPassword"
                      value={inputValues.confirmPassword}
                      onChange={(e) => onInputchange(e)}
                    />
                    <div className="btn2-div">
                      <button className="btn-circle btn-circle-warning" onClick={(e) => showPass(e)}>X</button>
                      <button className="btn-circle btn-circle-success" onClick={(e) => handleUpdateUser(e)}>V</button>
                    </div>
                  </form>

                </div>
              </div>
            </ul>
        </div>
    )
}

UserInfo.propTypes = {
  userInfo: PropTypes.func.isRequired,
};

export default UserInfo;
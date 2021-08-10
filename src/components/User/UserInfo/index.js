import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './userinfos.scss';

const UserInfo = ({
    userInfo,
    userName,
    firstName,
    lastName,
    email,
  }) => {
  
    useEffect(() => {
      userInfo();
    }, []);


    return (
        <div className="userInfo">
            <ul className="infoUser">
                <li className="infos"><span className="infoClasse">Username :</span> {userName}</li>
                <li className="infos"><span className="infoClasse">Firstname :</span> {firstName}</li>
                <li className="infos"><span className="infoClasse">Lastname :</span> {lastName}</li>
                <li className="infos"><span className="infoClasse">Mail :</span> {email}</li>
            </ul>
        </div>
    )
}

UserInfo.propTypes = {
  userInfo: PropTypes.func.isRequired,
};

export default UserInfo;
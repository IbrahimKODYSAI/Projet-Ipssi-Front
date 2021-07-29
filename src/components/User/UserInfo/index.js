import React from 'react';
import './userinfos.scss';

const UserInfo = () => {
    return (
        <div className="userInfo">
            <ul className="infoUser">
                <li className="infos"><span className="infoClasse">Username :</span> Kodysai</li>
                <li className="infos"><span className="infoClasse">Firstname :</span> Ibrahim</li>
                <li className="infos"><span className="infoClasse">Lastname :</span> KODY SANEDA</li>
                <li className="infos"><span className="infoClasse">Mail :</span> saneda.i@live.fr</li>
                <li className="infos"><span className="infoClasse">Mots de passe :</span> azerty</li>
                <li className="infos"><span className="infoClasse"><span role="img" aria-label="sheep">🃏 </span>Grade :</span> Admin</li>
            </ul>
        </div>
    )
}

export default UserInfo;
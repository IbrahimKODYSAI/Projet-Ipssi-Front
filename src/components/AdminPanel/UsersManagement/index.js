import React, {useEffect} from "react";

import "./usersmanegement.scss"


const UsersManagement = ({getUsers, users}) => {
    useEffect(() => {
        getUsers();
    }, [])
    console.log(users)

    return (

        <div className="product-mangement">
            <h1>Users management</h1>
            <ul>
                {
                    users.map(user => (
                        <div key={user._id}>
                            <li className="product-mangement_item">
                                {user.username}
                                <i 
                                    className="fa fa-trash"
                                    // onClick={(e) => handleDeleteProperty(user._id)}
                                ></i>
                                <i 
                                    className="fa fa-edit"
                                    // onClick={(e) => showPopUp(e, user)}
                                ></i>
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default UsersManagement;
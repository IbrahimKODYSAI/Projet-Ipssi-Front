import React from "react";

import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";


const BergerMenu = ({
    inputSearchValue,
    inputChange,
    products,
    foundProducts,
    setFoundedProduct,
    toggleSideDrawer,
    setToggleSideDrawer,
    userInfo,
    userInfos,
}) => {

    const props = {
        inputSearchValue,
        inputChange,
        products,
        foundProducts,
        setFoundedProduct,
      }

    return(
        <div>
            <Backdrop show={toggleSideDrawer} click={() => setToggleSideDrawer(false)}/>
            <SideDrawer
                props={props}
                show={toggleSideDrawer} 
                click={() => setToggleSideDrawer(false)}
                getUserInfo={userInfo}
                userInfos={userInfos}
            />
        </div>
    )

}

export default BergerMenu;
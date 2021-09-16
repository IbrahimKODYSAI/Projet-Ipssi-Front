import React, { useEffect } from "react";

 

const Success = () => {

    useEffect(() => {
        localStorage.removeItem('cart');
    //     (async () => {
    //         await axios.request({
    //             url: 'http://localhost:3001/api/orders/current_order',
    //             method: 'post',
    //           }).then(response => {
    //               console.log(response.data)
    //           }).catch(error => {
    //               console.error(error.message);
    //           })
    //    })();
    }, [])

    return (
        <div>
            <h1>Thank you for your order</h1>
            <p>
                We are currently processiing your order 
                and will send you a confirmation email shortly
            </p>
            <p>You can see your command in user profile ➔ My Orders</p>
            <button>
                Continue shopping
            </button>
        </div>
    )
}

export default Success
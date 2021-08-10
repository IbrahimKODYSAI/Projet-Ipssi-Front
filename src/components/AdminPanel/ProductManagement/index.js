import React, { useEffect, useState } from 'react';
import "./productmanagement.scss";
import Axios from "axios"


const ProductManagement = ({listProduct, allProducts}) => {
    useEffect(() => {
        listProduct();
        console.log(allProducts)
    }, []);
    
      const [inputValues, setInputValues] = useState({
    
        productName: "",
        productTitle: "",
        productPrice: 0,
        productStock: 0,
        productCategory: "",
        productCategory2: "",
        productCategory3: "",
        productCategory4: "",
        productImage: "",
        productImage2: "",
        productImage3: "",
        productImage4: "",
        productColor: "",
        productColor2: "",
        productColor3: "",
        productColor4: "",
        productDescription: "",
      });

      const handleChange = (event) => {
        const {name, value} = event.target;
        setInputValues({ ...inputValues, [name]: value })
      };


      const [show, setShow] = useState(false);
      const [oneProduct, setOneProduct ] = useState([])

      const showPopUp = (e, product) => {
          e.preventDefault()
          setShow(!show)
          if(product) setOneProduct(product)
          console.log(oneProduct)
        }

    const handleDeleteProperty = async (_id) => {
        console.log(_id)
        try{
            const res = await Axios.delete('http://localhost:3001/api/product/delete', {
                headers: {
                    Authorization: JSON.parse(sessionStorage.getItem('token'))
                },
                data: {
                    _id,
                },
            });
            if(res.data.success){
                alert(res.data.msg);
                
            }
            listProduct();
        }
        catch(err){
            console.error(err);
        }
    };

    const handleUpdateProduct = (e, _id) => {
        console.log(e)
        e.preventDefault();
        const options = {
            headers: {Authorization: JSON.parse(sessionStorage.getItem('token'))},
        }

            Axios.put ('http://localhost:3001/api/product/update',
            {
                _id,
                name: inputValues.productName,
                title: inputValues.productTitle,
                price: inputValues.productPrice,
                stock: inputValues.productStock,
                categories: [
                    inputValues.productCategory,
                    inputValues.productCategory2,
                    inputValues.productCategory3,
                    inputValues.productCategory4,
                ]
            }, options
            ).then(response => {
                console.log(response.data)
                showPopUp(e)
                listProduct();
            }).catch(error => {
                console.error(error.message);
                console.error(error.response);
            })
    }


    return (
        <div className="product-mangement">
            <h1>Product management</h1>
            <ul>
                {
                    allProducts.map(product => (
                        <div key={product._id}>
                            <li className="product-mangement_item">
                                {product.name}
                                <i 
                                    className="fa fa-trash"
                                    onClick={(e) => handleDeleteProperty(product._id)}
                                ></i>
                                <i 
                                    className="fa fa-edit"
                                    onClick={(e) => showPopUp(e, product)}
                                ></i>
                            </li>
                        </div>
                    ))
                }
            </ul>
            <div 
                className={show === true ? "popup-show" : "popup-hide" }
            >
                <form >
                    <h1>Product details</h1>
                    <div className="container5">
                        <div className="container5-group">
                            <input
                                placeholder={oneProduct.name}
                                type="text"
                                name="productName"
                                value={inputValues.productName}
                                onChange={handleChange}
                            />
                            <input
                                placeholder={oneProduct.title}
                                type="text"
                                name="productTitle"
                                value={inputValues.productTitle}
                                onChange={handleChange}
                            />
                            <input
                                placeholder={oneProduct.price}
                                type="number"
                                name="productPrice"
                                value={inputValues.productPrice}
                                onChange={handleChange}
                            />
                            <input
                                placeholder={oneProduct.stock}
                                type="number"
                                name="productStock"
                                value={inputValues.productStock}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="container5-group">
                            <input
                                placeholder={oneProduct.categories}
                                type="text"
                                name="productCategory"
                                value={inputValues.productCategory}
                                onChange={handleChange}
                                />
                                <input
                                placeholder="2 eme category"
                                type="text"
                                name="productCategory2"
                                value={inputValues.productCategory2}
                                onChange={handleChange}
                                />
                                <input
                                placeholder="3 eme category"
                                type="text"
                                name="productCategory3"
                                value={inputValues.productCategory3}
                                onChange={handleChange}
                                />
                                <input
                                placeholder="4 eme category"
                                type="text"
                                name="productCategory4"
                                value={inputValues.productCategory4}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="container5-group">
                            <input
                                placeholder="Color 1"
                                type="text"
                                name="productColor"
                                value={inputValues.productColor}
                                onChange={handleChange}
                                />
                                <input
                                placeholder="Color 2"
                                type="text"
                                name="productColor2"
                                value={inputValues.productColor2}
                                onChange={handleChange}
                                />
                                <input
                                placeholder="Color 3"
                                type="text"
                                name="productColor3"
                                value={inputValues.productColor3}
                                onChange={handleChange}
                                />
                                <input
                                placeholder="Color 4"
                                type="text"
                                name="productColor4"
                                value={inputValues.productColor4}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="container5-group">
                            <input
                                placeholder="Image 1"
                                type="text"
                                name="productImage"
                                value={inputValues.productImage}
                                onChange={handleChange}
                                />
                                <input
                                placeholder="Image 2"
                                type="text"
                                name="productImage2"
                                value={inputValues.productImage2}
                                onChange={handleChange}
                                />
                                <input
                                placeholder="Image 3"
                                type="text"
                                name="productImage3"
                                value={inputValues.productImage3}
                                onChange={handleChange}
                                />
                                <input
                                placeholder="Image 4"
                                type="text"
                                name="productImage4"
                                value={inputValues.productImage4}
                                onChange={handleChange}
                                />
                        </div>
                    </div>
                    <div className="fieldgroup4">
                        <textarea
                            onChange={handleChange}
                            name="productDescription"
                            placeholder="Description du produit"
                            type="text"
                            value={inputValues.productDescription}
                        />
                    </div>
                    <div className="btn-div">
                        <button className="btn btn-warning" onClick={(e) => showPopUp(e)}>CANCEL</button>
                        <button className="btn btn-success" onClick={(e) => handleUpdateProduct(e, oneProduct._id)}>UPDATE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductManagement;
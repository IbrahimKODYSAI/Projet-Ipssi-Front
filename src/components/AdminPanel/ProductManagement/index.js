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
    productImages: [],
    productColor: "",
    productColor2: "",
    productColor3: "",
    productColor4: "",
    productDescription: "",
    });

    const categories = [
        inputValues.productCategory,
        inputValues.productCategory2,
        inputValues.productCategory3,
        inputValues.productCategory4,
      ];
    
      const colors = [
        inputValues.productColor,
        inputValues.productColor2,
        inputValues.productColor3,
        inputValues.productColor4,
      ];
    

    const handleChange = (event) => {
    const {name, value} = event.target;
        setInputValues({ ...inputValues, [name]: value })
    };

    const [show, setShow] = useState(false);
    const [oneProduct, setOneProduct ] = useState([])
    const [multipleImages, setMultipleImages] = useState([])

    const showPopUp = (e, product) => {
        e.preventDefault()
        setShow(!show)
        if(product) setOneProduct(product)
        console.log(oneProduct)
    }
    
    const [urlImages, setUrlImages] = useState([])

    const handleImagesChange = (event) => {
        const fileObj = [];
        const fileArray = [];

        fileObj.push(event.target.files);

        for(let i = 0; i < fileObj[0].length; i ++){
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
        setMultipleImages(Array.from(event.target.files))
        setUrlImages(fileArray)
    }
    
    const handleUpdateProduct = async (e, _id) => {
        e.preventDefault();
        
        const data = new FormData();
        data.append('_id', _id)
        data.append('name', inputValues.productName)
        data.append('title', inputValues.productTitle)
        data.append('price', inputValues.productPrice)
        data.append('stock', inputValues.productStock)
        for (let i = 0; i < categories.length; i++) {
          data.append('categories', categories[i])
        }
        for (let i = 0; i < colors.length; i++) {
          data.append('colors', colors[i])
        }
        data.append('description', inputValues.productDescription)
        for (let i = 0; i < multipleImages.length; i++) {
          data.append('files', multipleImages[i])
        }
      
        await Axios.request({
          url: 'http://localhost:3001/api/product/update',
          method: 'put',
          data,
          headers: {
            Authorization: JSON.parse(sessionStorage.getItem('token'))
          }
        }).then(response => {
            console.log(response.data)
            showPopUp(e)
            listProduct();
        }).catch(error => {
            console.error(error.message);
            console.error(error.response);
        })
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
                            <div>
                                <input type="file" multiple onChange={handleImagesChange}/>
                            </div>
                            <div className="container5-group_imgDiv">
                            
                            {
                                (urlImages || []).map(url => (
                                    <img key={url} src={url} alt="" />
                                ))
                            }

                            </div>
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
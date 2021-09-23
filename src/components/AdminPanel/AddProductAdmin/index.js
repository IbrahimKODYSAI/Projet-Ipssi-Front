import React, { useState } from "react";
import "./addproductadmin.scss";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

toast.configure()

const AddProductAdmin = () => {

  const [inputValues, setInputValues] = useState({
    
    productName: "",
    productTitle: "",
    productPrice: 0,
    productStock: 0,
    productCategory: "",
    productCategory2: "",
    productCategory3: "",
    productCategory4: "",
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

  const [multipleImages, setMultipleImages] = useState([])
  const [urlImages, setUrlImages] = useState([])


  const handleImagesChange = (event) => {
    const fileObj = [];
    const fileArray = [];

    fileObj.push(event.target.files);

    for(let i = 0; i < fileObj[0].length; i ++){
        fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    setMultipleImages(event.target.files)
    setUrlImages(fileArray)
  }

  

  const submitProductHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();
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
  
    await axios.request({
      url: 'http://localhost:3001/api/product/create',
      method: 'post',
      data,
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem('token'))
      }
    })
    .then((response) => {
      console.log("product added successfuly")
      toast.success("product added successfuly", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      })
    })
    .catch((error) => {
      toast.error(error.response.data.slice(1, 50), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      })
      console.log(error.response);
    });
  }

  return (
      <form className="container3-details">
        <h1>Ajouter un produit ou le modifier</h1>
        <div className="container3-details_block">
          <div className="container3-details_description">
            <div className="container3-details_description_1">
              <input
                placeholder="Name*"
                type="text"
                name="productName"
                value={inputValues.productName}
                onChange={handleChange}
              />
              <input
                placeholder="title*"
                type="text"
                name="productTitle"
                value={inputValues.productTitle}
                onChange={handleChange}
              />
              <input
                placeholder="Price*"
                type="number"
                name="productPrice"
                value={inputValues.productPrice}
                onChange={handleChange}
              />
              <input
                placeholder="Stock*"
                type="number"
                name="productStock"
                value={inputValues.productStock}
                onChange={handleChange}
              />
            </div>
            <div className="container3-details_description_1">
              <input
                  placeholder="1 er category*"
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
            <div className="container3-details_description_1">
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
            <div className="fieldgroup4">
              <textarea
                onChange={handleChange}
                name="productDescription"
                placeholder="Description du produit"
                type="text"
                value={inputValues.productDescription}
              />
            </div>
          </div>
          {/* <div className="container3-details_images">
            <div>
              <label>Select image for the product</label>
              <input
                className="form-control"
                type="file"
                name="productImages"
                onChange={handleImagesChange}
              />
              <button
                onClick={(e) => fileUploadHandler(e)}
              >
                Upload image
              </button>
            </div>
          </div> */}

        </div>
        <button
        className="form-submit form-submit--login"
        type="submit"
        onClick={(e) => submitProductHandler(e)}
      >
        ADD PRODUCT
      </button>
    </form>
  );
};

export default AddProductAdmin;

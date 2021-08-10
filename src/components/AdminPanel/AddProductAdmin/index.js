import React, { useState } from "react";
import "./addproductadmin.scss";
import axios from "axios";

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

  // const handleImagesChange = (event) => {
  //   const imagesFiles = Array.from(event.target.files)
  //   setInputValues({ ...inputValues, productImages: imagesFiles })
  // }

  // const fileSelectedHandler = event => {
  //   const imagesFile = event.target.files[0];
  //   console.log(imagesFile)
  //   setInputValues({ ...inputValues, productImage: imagesFile})
  // }

  // const fileUploadHandler = (e) => {
  //   e.preventDefault();
  //   const fd = new FormData();
  //   fd.append('image', inputValues.productImages[0], inputValues.productImages[0].name);
  //   axios.put('http://localhost:3001/api/product/update/image/6107617383d7da58a8742034')
  //   .then(res => {
  //     console.log(res)
  //   })
  // }

  const submitProductHandler = async (e) => {
    e.preventDefault();
  
    await axios.request({
      url: 'http://localhost:3001/api/product/create',
      method: 'post',
      data: {
        name: inputValues.productName,
        title: inputValues.productTitle,
        description: inputValues.productDescription,
        price: inputValues.productPrice,
        stock: inputValues.productStock,
        categories: [
          inputValues.productCategory,
          inputValues.productCategory2,
          inputValues.productCategory3,
          inputValues.productCategory4,
        ],
        images: [
          inputValues.productImage,
          inputValues.productImage2,
          inputValues.productImage3,
          inputValues.productImage4,
        ],
        colors: [
          inputValues.productColor,
          inputValues.productColor2,
          inputValues.productColor3,
          inputValues.productColor4,
        ],
      },
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem('token'))
      }
    })
    .then((response) => {
      console.log(response.data);
      console.log(Object.keys(inputValues));
      console.log("product added successfuly")
      return response
    })
    .then(() => {
      Object.keys(inputValues).forEach((input) => {
        console.log(input)
        setInputValues({ ...inputValues, [input]: "" })
      })
    })
    // en cas d'echec : catch
    .catch((error) => {
      // console.error(error.message);
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
            <div className="container3-details_description_1">
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

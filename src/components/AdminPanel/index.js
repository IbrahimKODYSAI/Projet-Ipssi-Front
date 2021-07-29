import React from "react";
import PropTypes from "prop-types";
import Field from "containers/Login/Field/";
import "./adminpanel.scss";

const AdminPanel = ({
  InputChange,
  creatProductTitle,
  creatProductDescription,
  creatProductPrice,
  creatProductContent,
}) => {
  const handleChange = (event) => {
    const { name: fieldName, value: fieldValue } = event.target;
    InputChange(fieldName, fieldValue);
  };

  return (
    <div>
      <div className="container3">
        <h1>Ajouter un produit ou le modifier</h1>
        <div>
          <form className="container3-details">
            <div className="container3-details_description">
              <Field
                placeholder="title"
                type="text"
                name="creatProductTitle"
                value={creatProductTitle}
              />
              <Field
                placeholder="Product description"
                type="text"
                name="creatProductDescription"
                value={creatProductDescription}
              />
              <Field
                placeholder="price"
                type="number"
                name="creatProductPrice"
                value={creatProductPrice.toString()}
              />
              <div className="fieldgroup4">
                <p>Content</p>
                <textarea
                  onChange={handleChange}
                  cols="100"
                  rows="10"
                  name="creatProductContent"
                  placeholder="Content *"
                  type="text"
                  value={creatProductContent}
                />
              </div>
            </div>
            <div className="container3-details_images">
              <label>Select 4 images for the product</label>
              <input type="file" className="form-control" multiple />
            </div>
          </form>
        </div>
      </div>
      <div>
        <form></form>
      </div>
    </div>
  );
};

AdminPanel.propTypes = {
  InputChange: PropTypes.func.isRequired,
};
export default AdminPanel;

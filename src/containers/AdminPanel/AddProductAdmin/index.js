import { connect } from "react-redux";
import AddProductAdmin from "components/AdminPanel/AddProductAdmin";

import { onInputImageChange, onInputChange } from "store/reducer";

const mapStateToProps = (state) => ({
  creatProductTitle: state.creatProductTitle,
});

const mapDispatchToProps = (dispatch) => ({
  InputChange: (name, value) => {
    dispatch(onInputChange(name, value));
  },
  inputImageChange: (imageObject) => {
    dispatch(onInputImageChange(imageObject))
  }
});

const AddProductAdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductAdmin);

// export
export default AddProductAdminContainer;

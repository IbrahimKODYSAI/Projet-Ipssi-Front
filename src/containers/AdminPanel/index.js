import { connect } from "react-redux";
import AdminPanel from "components/AdminPanel";

import { onInputChange } from "store/reducer";

const mapStateToProps = (state) => ({
  creatProductTitle: state.creatProductTitle,
  creatProductDescription: state.creatProductDescription,
  creatProductPrice: state.creatProductPrice,
  creatProductContent: state.creatProductContent,
});

const mapDispatchToProps = (dispatch) => ({
  InputChange: (name, value) => {
    dispatch(onInputChange(name, value));
  },
});

const AdminPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel);

// export
export default AdminPanelContainer;

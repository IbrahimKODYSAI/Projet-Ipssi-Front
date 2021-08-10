// == import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// == import : local
import dataText from '../SignUp/data/texts';
import Field from '../../containers/Login/Field';
import '../../components/Login/login.scss';

// == composant
const SignUp = ({
  registerFirstName,
  registerLastName,
  registerUserName,
  registerEmail,
  registerPassword,
  registerPasswordConfirm,
  onSubmitForm,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitForm();
  };

  return (
    <div className="app">
      <div id="login">
        <h1 className="app-title">{dataText.login.title}</h1>
        <p className="app-desc">{dataText.login.desc}</p>
        <form className="form" onSubmit={handleSubmit}>
          <Field
            name="registerFirstName"
            placeholder="Firstname *"
            type="text"
            value={registerFirstName}
          />
          <Field
            name="registerLastName"
            placeholder="Lastname *"
            type="text"
            value={registerLastName}
          />
          <Field
            name="registerUserName"
            placeholder="Username *"
            type="text"
            value={registerUserName}
          />
          <Field
            name="registerEmail"
            placeholder="Email *"
            type="email"
            value={registerEmail}
          />
          <Field
            name="registerPassword"
            placeholder="Password *"
            type="password"
            value={registerPassword}
          />
          <Field
            name="registerPasswordConfirm"
            placeholder="Confirm password *"
            type="password"
            value={registerPasswordConfirm}
          />
          <button
            className="form-submit form-submit--login"
            type="submit"
          >
            {dataText.login.submit}
          </button>
          <Link
            className="app-link"
            to="/login"
            exact="true"
          >
            {dataText.login.link}
          </Link>
        </form>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  registerLastName: PropTypes.string.isRequired,
  registerFirstName: PropTypes.string.isRequired,
  registerUserName: PropTypes.string.isRequired,
  registerEmail: PropTypes.string.isRequired,
  registerPassword: PropTypes.string.isRequired,
};

// == export
export default SignUp;

// == import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == import : local
import dataText from '../../data/texts';
import Field from '../../containers/Login/Field';
import './login.scss';

// == composant
const Login = ({
  loginEmail,
  loginPassword,
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
            name="loginEmail"
            placeholder="Email *"
            type="email"
            value={loginEmail}
          />
          <Field
            name="loginPassword"
            placeholder="Password *"
            type="password"
            value={loginPassword}
          />
          <button
            className="form-submit form-submit--login"
            type="submit"
          >
            {dataText.login.submit}
          </button>
        </form>
        <Link
          to="/forgotten-password"
          exacte="true"
          className="app-link"
        >
          {dataText.login.link}
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  loginEmail: PropTypes.string.isRequired,
  loginPassword: PropTypes.string.isRequired,
};

// == export
export default Login;

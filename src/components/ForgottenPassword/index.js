// == import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == import : local
import dataText from '../../data/texts';
import Field from '../Login/Field';
import '../../components/Login/login.scss';


// == composant
const ForgottenPassword = ({
  email,
}) => (
  <div className="app">
    <div id="password">
      <Link to="/login" exacte className="app-link app-link--back">
          {dataText.password.link}
      </Link>
      <h1 className="app-title">{dataText.password.title}</h1>
      <p className="app-desc">{dataText.password.desc}</p>
      <form className="form">
        <Field
          name="email"
          placeholder="Votre Email *"
          type="email"
          value={email}
        />
        <button
          className="form-submit"
          type="submit"
        >
          {dataText.password.submit}
        </button>
      </form>
    </div>
  </div>
);

ForgottenPassword.propTypes = {
  email: PropTypes.string.isRequired,
};

// == export
export default ForgottenPassword;

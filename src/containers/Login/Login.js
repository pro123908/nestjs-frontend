import { Formik } from "formik";
import React, { useEffect } from "react";

import { connect } from "react-redux";

import {
  CheckProtected,
  clearRegistrationError,
  loginUser,
} from "../../actions/AuthActions";

import RegistrationTemplate from "../../components/Misc/RegistrationTemplate";

const Login = (props) => {
  return (
    <RegistrationTemplate
      title="Login"
      errorMessage={props.error.message}
      fields={{
        email: "pro123908@gmail.com",
        password: "home123",
      }}
      bottomDesc1="New here?"
      bottomDesc2="Sign Up"
      link="/sign-up"
      onSubmit={({ email, password }, { setSubmitting }) => {
        props.loginUser(email, password, props.history);
        setSubmitting(false);
      }}
      clearError={props.clearRegistrationError}
    />
  );
};

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken,
  error: state.auth.error,
});

const mapDispatchToProps = {
  loginUser,
  CheckProtected,
  clearRegistrationError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

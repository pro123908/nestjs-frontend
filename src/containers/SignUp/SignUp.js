import { Formik } from "formik";
import React, { useEffect } from "react";

import { connect } from "react-redux";

import {
  CheckProtected,
  clearRegistrationError,
  registerUser,
} from "../../actions/AuthActions";

import RegistrationTemplate from "../../components/Misc/RegistrationTemplate";

const SignUp = (props) => {
  return (
    <RegistrationTemplate
      title="Sign Up"
      errorMessage={props.error.message}
      fields={{
        name: "Bilal Ahmad",
        email: "pro123908@gmail.com",
        password: "home123",
      }}
      bottomDesc1="Already a member?"
      bottomDesc2="Login"
      link="/login"
      registerTemplate
      onSubmit={({ name, email, password }, { setSubmitting }) => {
        props.registerUser(name, email, password, props.history);
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
  registerUser,
  CheckProtected,
  clearRegistrationError,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

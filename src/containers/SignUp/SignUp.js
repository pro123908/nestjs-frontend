import { Formik } from "formik";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CheckProtected, registerUser } from "../../actions/AuthActions";
import ButtonWithIcon from "../../components/Misc/ButtonWithIcon/ButtonWithIcon";
import InputWithIcon from "../../components/Misc/InputWithIcon/InputWithIcon";

const SignUp = (props) => {
  useEffect(() => {
    // props.sign-upUser();
  }, []);

  return (
    <div className="sign-up-container">
      <div className="sign-up-box">
        <div className="sign-up-box-left">
          <div className="sign-up-box-left-container">
            <div className="sign-up-box-left__big-heading">
              <div className="sign-up-box-left__big-heading-main">JOIN</div>
              <div className="sign-up-box-left__big-heading-sub">
                Our Community and be a part of a fantastic journey
              </div>
            </div>
            <div className="sign-up-box-left__desc">
              We offer internship in wide areas of technology so that you can
              grow and build your future!
            </div>
          </div>
        </div>
        <div className="sign-up-box-right">
          <div className="sign-up-box-right-container">
            <div className="sign-up-box-right__heading">Sign Up</div>
            <div className="sign-up-box-right__desc">
              Heyyyy, let's get started
            </div>
            <div
              className={`sign-up-box-right__server-error ${
                !props.error.message ? "op-0" : ""
              }`}
            >
              {props.error.message ? props.error.message : ""}
            </div>
            <Formik
              initialValues={{
                name: "Bilal Ahmad",
                email: "pro123908@gmail.com",
                password: "home123",
                // name: "",
                // email: "",
                // password: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.name) errors.name = "Required";
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                if (!values.password) errors.password = "Required";
                else if (values.password.length < 6)
                  errors.password = "Minimum 6 characters long";
                return errors;
              }}
              onSubmit={({ name, email, password }, { setSubmitting }) => {
                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  props.registerUser(name, email, password, props.history);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <InputWithIcon
                    type="name"
                    name="name"
                    placeholder="Full Name"
                    iconClass="fas fa-book"
                    onInputChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                    error={errors.name && touched.name && errors.name}
                  />

                  <InputWithIcon
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onInputChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    error={errors.email && touched.email && errors.email}
                  />

                  <InputWithIcon
                    type="password"
                    name="password"
                    placeholder="Password"
                    iconClass="fas fa-key"
                    onInputChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    error={
                      errors.password && touched.password && errors.password
                    }
                  />

                  <ButtonWithIcon
                    buttonText="Continue"
                    iconClass="fas fa-arrow-right"
                    type="submit"
                    disabled={isSubmitting}
                  />
                </form>
              )}
            </Formik>

            <Link className="link sign-up-box-right__bottom-text" to="/login">
              Already a member?{" "}
              <span style={{ fontWeight: 600, marginLeft: ".2rem" }}>
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken,
  error: state.auth.error,
});

const mapDispatchToProps = {
  registerUser,
  CheckProtected,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

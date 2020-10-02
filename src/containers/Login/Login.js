import axios from "axios";
import { Formik } from "formik";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { CheckProtected, loginUser } from "../../actions/AuthActions";
import ButtonWithIcon from "../../components/Misc/ButtonWithIcon/ButtonWithIcon";
import InputWithIcon from "../../components/Misc/InputWithIcon/InputWithIcon";

const Login = (props) => {
  useEffect(() => {
    // props.loginUser();
  }, []);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-box-left">
          <div className="login-box-left-container">
            <div className="login-box-left__big-heading">
              <div className="login-box-left__big-heading-main">JOIN</div>
              <div className="login-box-left__big-heading-sub">
                Our Community and be a part of a fantastic journey
              </div>
            </div>
            <div className="login-box-left__desc">
              We offer internship in wide areas of technology so that you can
              grow and build your future!
            </div>
          </div>
        </div>
        <div className="login-box-right">
          <div className="login-box-right-container">
            <div className="login-box-right__heading">Login</div>
            <div className="login-box-right__desc">
              Heyyyy, let's get started
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                if (!values.password) errors.password = "Required";
                else if (values.password.length < 8)
                  errors.password = "Minimum 8 characters long";
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
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

            <div className="login-box-right__bottom-text">
              New here? Sign Up
            </div>
          </div>
        </div>
      </div>
      {/* <div>{props.accessToken ? props.accessToken : ""}</div>
      <button onClick={() => props.CheckProtected(props.accessToken)}>
        Click
      </button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken,
});

const mapDispatchToProps = {
  loginUser,
  CheckProtected,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

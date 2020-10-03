import { Formik } from "formik";
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import InputWithIcon from "../InputWithIcon/InputWithIcon";

const RegistrationTemplate = ({
  title,
  errorMessage,
  fields,
  bottomDesc1,
  bottomDesc2,
  registerTemplate,
  onSubmit,
  link,
  clearError,
}) => {
  useEffect(() => {
    clearError();
  }, []);
  return (
    <div className="registration-template-container">
      <div className="registration-template-box">
        <div className="registration-template-box-left">
          <div className="registration-template-box-left-container">
            <div className="registration-template-box-left__big-heading">
              <div className="registration-template-box-left__big-heading-main">
                JOIN
              </div>
              <div className="registration-template-box-left__big-heading-sub">
                Our Community and be a part of a fantastic journey
              </div>
            </div>
            <div className="registration-template-box-left__desc">
              We offer internship in wide areas of technology so that you can
              grow and build your future!
            </div>
          </div>
        </div>
        <div className="registration-template-box-right">
          <div className="registration-template-box-right-container">
            <div className="registration-template-box-right__heading">
              {title}
            </div>
            <div className="registration-template-box-right__desc">
              Heyyyy, let's get started
            </div>
            <div
              className={`registration-template-box-right__server-error ${
                !errorMessage ? "op-0" : ""
              }`}
            >
              {errorMessage ? errorMessage : ""}
            </div>
            <Formik
              initialValues={fields}
              validate={(values) => {
                const errors = {};

                if (registerTemplate && !values.name) errors.name = "Required";
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
              onSubmit={onSubmit}
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
                  {registerTemplate ? (
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
                  ) : (
                    ""
                  )}

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

            <Link
              className="link registration-template-box-right__bottom-text"
              to={link}
            >
              {bottomDesc1}
              <span style={{ fontWeight: 600, marginLeft: ".2rem" }}>
                {bottomDesc2}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationTemplate;

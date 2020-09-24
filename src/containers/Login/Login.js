import React from "react";

import { connect } from "react-redux";

const Login = () => {
  return <div>Login Page</div>;
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from "react";

import { connect } from "react-redux";

const SignUp = () => {
  return <div>SignUp Page</div>;
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

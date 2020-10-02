import axios from "axios";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { CheckProtected, loginUser } from "../../actions/AuthActions";

const Login = (props) => {
  useEffect(() => {
    // props.loginUser();
  }, []);

  return (
    <div>
      <div>Login Page</div>
      <div>{props.accessToken ? props.accessToken : ""}</div>
      <button onClick={() => props.CheckProtected(props.accessToken)}>
        Click
      </button>
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

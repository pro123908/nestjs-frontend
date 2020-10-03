import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <div>
      <div>{props.auth.name}</div>
      <div>{props.auth.email}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

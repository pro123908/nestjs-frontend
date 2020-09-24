import React from "react";
import { connect } from "react-redux";

const Home = () => {
  return <div>Home Page</div>;
};

const mapStateToProps = (state) => {
  return {
    state: StaticRange,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

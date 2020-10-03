import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_PRODUCTS } from "../../actions/actionType";
import { logoutUser } from "../../actions/AuthActions";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../../actions/ProductsActions";
import ButtonWithIcon from "../../components/Misc/ButtonWithIcon/ButtonWithIcon";
import Product from "../../components/Misc/Product";

const Home = (props) => {
  useEffect(() => {
    // props.getProducts();
    // setTimeout(() => {
    //   // props.updateProduct("5f78771999a9551afced6984", {
    //   //   description: "Updated XYYY React",
    //   //   price: 30,
    //   // });
    //   props.deleteProduct("5f78de3b45002d30f44f683f");
    // }, 10000);
  }, []);
  return (
    <div className="home">
      <div className="home-box">
        {/* <div>{props.auth.name}</div>
        <div>{props.auth.email}</div> */}
        {props.products.map((product) => (
          <Product product={product} />
        ))}
      </div>
      <ButtonWithIcon
        buttonText="Logout"
        id="logout-button"
        iconClass="fas fa-sign-out-alt"
        onClick={() => props.logoutUser(props.history)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    products: state.products.products,
  };
};

const mapDispatchToProps = {
  logoutUser,
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
import AddProduct from "../../components/Misc/AddProduct";
import ButtonWithIcon from "../../components/Misc/ButtonWithIcon/ButtonWithIcon";
import Product from "../../components/Misc/Product";
import LoadingOverlay from "react-loading-overlay";
import ScrollProgress from "../../components/Misc/ScrollProgress";
import ScrollToTop from "../../components/Misc/ScrollToTop";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Home = (props) => {
  useEffect(() => {
    props.getProducts();

    // setTimeout(() => {
    //   // props.updateProduct("5f78771999a9551afced6984", {
    //   //   description: "Updated XYYY React",
    //   //   price: 30,
    //   // });
    //   props.deleteProduct("5f78de3b45002d30f44f683f");
    // }, 10000);
  }, []);
  console.log("loading : ", props.loading);
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />

      <div className="home">
        <div className="home-box">
          <AddProduct addProduct={props.addProduct} />
          {/* <div>{props.auth.name}</div>
        <div>{props.auth.email}</div> */}
          {props.products.map((product) => (
            <Product
              product={product}
              onUpdate={props.updateProduct}
              onDelete={props.deleteProduct}
            />
          ))}
        </div>
        <ButtonWithIcon
          buttonText="Logout"
          id="logout-button"
          iconClass="fas fa-sign-out-alt"
          onClick={() => props.logoutUser(props.history)}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    products: state.products.products,
    loading: state.products.loading,
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

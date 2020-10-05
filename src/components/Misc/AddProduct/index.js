import React, { useRef, useState } from "react";

import showToast from "../../../utils/toast";

const AddProduct = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const eleRef = useRef(null);

  const scrollToProduct = () => {
    console.log(eleRef.current.offsetTop);
    window.scrollTo(0, eleRef.current.offsetTop);
  };

  const addProductHandler = () => {
    showToast("Product is being added", "info", 1000);
    addProduct(title, desc);
    scrollToProduct();
    setTitle("");
    setDesc("");
  };
  return (
    <div className="add-product" ref={eleRef}>
      <div className="add-product__title">
        <div className="add-product__title-label">Title</div>
        <input
          className="input add-product__title-input"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="add-product__desc">
        <div className="add-product__desc-label">Description</div>
        <textarea
          className="input add-product__desc-input"
          placeholder="Product Description"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
      </div>

      <button
        className="button add-product__button"
        onClick={addProductHandler}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;

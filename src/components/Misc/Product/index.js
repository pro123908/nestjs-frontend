import React, { useState } from "react";

const Product = ({ product: { title, description } }) => {
  const [editMode, setEditMode] = useState(true);
  return (
    <div className="product">
      <div className="product__text">
        {!editMode ? (
          <div className="product__title">{title}</div>
        ) : (
          <input
            className="input product__title-input"
            placeholder="Product Title"
            value={title}
          />
        )}
        {!editMode ? (
          <div className="product__desc">{description}</div>
        ) : (
          <textarea
            className="input product__desc-input"
            placeholder="Product Description"
            // value={description}
          />
        )}
        {editMode ? (
          <div className="product__edit-actions">
            <i class="far fa-check-circle product__edit-icons-action"></i>
            <i class="far fa-times-circle product__edit-icons-action"></i>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="product__actions">
        <div
          className="product__edit product__action"
          onClick={() => setEditMode(true)}
        >
          <i class="far fa-edit"></i>
        </div>
        <div className="product__delete product__action">
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;

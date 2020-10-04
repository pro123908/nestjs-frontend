import React, { useState } from "react";

const Product = ({
  product: { id, title: prodTitle, description: prodDescription },
  onDelete,
  onUpdate,
}) => {
  const [title, setTitle] = useState(prodTitle);
  const [description, setDescription] = useState(prodDescription);

  const [editMode, setEditMode] = useState(false);
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
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
        {!editMode ? (
          <div className="product__desc">{description}</div>
        ) : (
          <textarea
            className="input product__desc-input"
            placeholder="Product Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        )}
        {editMode ? (
          <div className="product__edits-actions">
            <div
              className=" product__edits-action product__edits-tick"
              onClick={() => {
                onUpdate(id, { title, description });
                setEditMode((val) => !val);
              }}
            >
              <i class="fas fa-check"></i>
            </div>

            <div className=" product__edits-action product__edits-cross">
              <i class="fas fa-times"></i>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="product__actions">
        <div
          className="product__edit product__action"
          onClick={() => setEditMode((val) => !val)}
        >
          <i class="far fa-edit"></i>
        </div>
        <div
          className="product__delete product__action"
          onClick={() => onDelete(id)}
        >
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;

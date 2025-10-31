// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p className="price">
        ₱{parseFloat(product.price).toFixed(2)}
      </p>
      <p className="quantity">
        Stocks: {(product.quantity)}
      </p>
      <p className="description">{product.description}</p>
      <div className="actions">
        <button onClick={() => onEdit(product)} className="btn-edit">
          Update Product
        </button>
        <button onClick={() => onDelete(product.id)} className="btn-delete">
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
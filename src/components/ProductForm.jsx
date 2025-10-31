// src/components/ProductForm.jsx
import React, { useState, useEffect } from "react";

const ProductForm = ({ initialData = {}, onSubmit, isUpdate = false }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    ...initialData,
  });

  // Effect to sync external initialData changes (e.g., when clicking 'Edit')
  useEffect(() => {
    setProduct({ name: "", description: "", price: "", quantity: "", ...initialData });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (!product.name || !product.price) {
      alert("Name and Price are required.");
      return;
    }

    // Pass the product object to the parent handler
    onSubmit(product);

    // Clear form only on Create mode
    if (!isUpdate) {
      setProduct({ name: "", description: "", price: "", quantity: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h3>{isUpdate ? "Update Product" : "Create New Product"}</h3>

      <div className="form-group">
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          step="0.01"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Product Stocks:</label>
        <input
          type="number"
          step="0.01"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={product.description || ""}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className={isUpdate ? "btn-update" : "btn-create"}>
        {isUpdate ? "Save Changes" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
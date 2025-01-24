import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    category: "",
    productId: "",
    name: "",
    quantity: "",
    unitPrice: "",
    totalPrice: "",
    minStock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation Example: Ensure all fields are filled out
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }
  
    try {
      // Send POST request to add product
      const response = await fetch("http://localhost:3000/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Failed to add product: ${errorData.message}`);
        return;
      }
  
      const responseData = await response.json();
      alert("Product added successfully!");
      console.log("Response:", responseData);
  
      // Reset form
      setFormData({
        category: "",
        productId: "",
        name: "",
        quantity: "",
        unitPrice: "",
        totalPrice: "",
        minStock: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    }
  };  

  return (
    <div className="add-product">
      <h1 className="add-product-title">Add New Product</h1>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g., Laptop, Phone"
          />
        </div>

        <div className="form-group">
          <label htmlFor="productId">Product ID</label>
          <input
            type="text"
            id="productId"
            name="productId"
            value={formData.productId}
            onChange={handleChange}
            placeholder="e.g., 12345"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., iPhone 14 Pro"
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g., 50"
          />
        </div>

        <div className="form-group">
          <label htmlFor="unitPrice">Unit Price (UP)</label>
          <input
            type="number"
            id="unitPrice"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            placeholder="e.g., 999"
          />
        </div>

        <div className="form-group">
          <label htmlFor="totalPrice">Total Price</label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            value={formData.totalPrice}
            onChange={handleChange}
            placeholder="e.g., 49950"
          />
        </div>

        <div className="form-group">
          <label htmlFor="minStock">Minimum Stock</label>
          <input
            type="number"
            id="minStock"
            name="minStock"
            value={formData.minStock}
            onChange={handleChange}
            placeholder="e.g., 10"
          />
        </div>

        <button type="submit" className="add-product-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">Electronics Inventory Management</h1>
      <div className="button-container">
        <button className="home-button" onClick={() => alert("Add Product")}>
          Add Product
        </button>
        <button className="home-button" onClick={() => alert("Update Product")}>
          Update Product
        </button>
        <button className="home-button" onClick={() => alert("View Product List")}>
          View Product List
        </button>
        <button className="home-button" onClick={() => alert("Manage Products")}>
          Manage Products
        </button>
      </div>
    </div>
  );
};

export default HomePage;
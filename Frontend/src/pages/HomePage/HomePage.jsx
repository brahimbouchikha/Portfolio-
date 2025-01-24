import React from "react";
import { useNavigate } from 'react-router';
import InventoryManagementSvg from '../../assets/inventory-management.svg';
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home-page">
      {/* Content */}
      <div className="content-container">
        <h1 className="home-title">Electronics Inventory Management</h1>
        <div className="button-container">
          <button className="home-button" onClick={() => navigate('/products/add')}>
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

      {/* Svg */}
      <div className="svg-container">
        <img src={InventoryManagementSvg} alt="Inventory Management Svg" />
      </div>
    </div>
  );
};

export default HomePage;
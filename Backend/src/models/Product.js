const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  productId: {
    type: String,
    required: [true, "Product ID is required"],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [0, "Quantity cannot be negative"],
  },
  unitPrice: {
    type: Number,
    required: [true, "Unit Price is required"],
    min: [0, "Unit Price cannot be negative"],
  },
  totalPrice: {
    type: Number,
    required: [true, "Total Price is required"],
    min: [0, "Total Price cannot be negative"],
  },
  minStock: {
    type: Number,
    required: [true, "Minimum Stock is required"],
    min: [0, "Minimum Stock cannot be negative"],
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
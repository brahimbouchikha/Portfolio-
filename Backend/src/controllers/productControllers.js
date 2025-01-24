const Product = require('../models/Product');

const addProduct = async (req, res) => {
  const { category, productId, name, quantity, unitPrice, totalPrice, minStock } = req.body;

  try {
      // Validation example
      if (!category || !productId || !name || !quantity || !unitPrice || !totalPrice || !minStock) {
        return res.status(400).json({ message: "All fields are required." });
      }
    
      // In a real application, you'd save the product to the database here.
      // Example placeholder logic:
      const newProduct = new Product ({
        category,
        productId,
        name,
        quantity,
        unitPrice,
        totalPrice,
        minStock,
      });
    
      // Save data to database
      await newProduct.save();
    
      console.log("New Product Added:", newProduct);
    
      // Send a success response
      res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.log("Failed to add the product:", error);
    res.status(500).json({ message: 'Failed to add the product'});
  }
};

module.exports = { addProduct };

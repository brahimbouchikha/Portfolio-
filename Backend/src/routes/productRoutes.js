const express = require("express");
const router = express.Router();
const { addProduct } = require("../controllers/productControllers");

// Route to add a new product
router.post("/products/add", addProduct);

module.exports = router;
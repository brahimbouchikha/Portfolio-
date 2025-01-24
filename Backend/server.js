require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('./src/routes/productRoutes');
const connectDB = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// CORS
app.use(cors());

// Connect to database
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Electronics Inventory Management!');
});

app.use('/api', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
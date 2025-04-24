const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const cartRoutes = require("./routes/cartRoutes");
// const router = require('./routes/userRoutes');
// const mongoose = require ("mongoose");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");



dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use("/api/products",productRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/checkout',checkoutRoutes);
app.use('/api/orders',orderRoutes);




app.get('/', (req, res) => {
  res.send('API is running...');
});

// API Routes

const PORT = process.env.PORT || 5001;   
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


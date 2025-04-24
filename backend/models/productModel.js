const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: String,
  category: String,
  description: String,
  price: {
    type: Number,
    required: true,
  },
  colors: [String],
  sizes: [String],
  image: String,
  inStock: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

// const Product = mongoose.model('Product', productSchema);
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);


module.exports = Product;

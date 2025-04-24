const mongoose = require("mongoose");

const checkoutItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true, // ✅ fixed spelling: "require" → "required"
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity:{
    type: Number,
    required: true,
  }
}, { _id: false });

const checkoutSchema = new mongoose.Schema({ // ✅ fixed typo: "new mongoose,Schema" → "new mongoose.Schema"
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // ✅ match the exact model name you used for the user schema
    required: true,
  },
  checkoutItems: [checkoutItemSchema],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentMethod: {
    type: String,
    required: true, // ✅ fixed spelling: "require" → "required"
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  paymentStatus: {
    type: String,
    default: "pending",
  },
  paymentDetails: {
    type: mongoose.Schema.Types.Mixed, // ✅ this is fine for storing dynamic payment info
  },
  isFinalized: {
    type: Boolean,
    default: false,
  },
  isFinalizedAt: {
    type: Date,
  },
}, { timestamps: true });

// ✅ fixed export typo and quote
module.exports = mongoose.model("Checkout", checkoutSchema);

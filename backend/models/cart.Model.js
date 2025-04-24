// import mongoose from "mongoose";

// const cartSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   products: {
//     type: [
//       {
//         productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
//         size: { type: String, required: true },
//         color: { type: String, required: true },
//         quantity: { type: Number, required: true, default: 1 },
//         // price: { type: Number, required: true },
//         // image: { type: String, required: true },
//       }
//     ],
//     validate: [array => array.length > 0, 'Cart must have at least one item']

//   }
// });

// const Cart = mongoose.model("Cart", cartSchema);
// export default Cart;



// const mongoose = require("mongoose");

// const cartSchema = new mongoose.Schema({
//   userId: { type: String },
//   guestId: { type: String },
//   items: [
//     {
//       productId: String,
//       quantity: Number,
//       size: String,
//       color: String,
//     },
//   ],
// });

// module.exports = mongoose.model("Cart", cartSchema);




const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: String },
  guestId: { type: String },
  products: [ // ✅ changed from items → products
    {
      productId: String,
      quantity: Number,
      size: String,
      color: String,
      name: String,
      image: String,
      price: Number,
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Cart", cartSchema);


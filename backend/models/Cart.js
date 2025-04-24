
// const mongoose = require("mongoose");

// const cartItemSchema = new mongoose.Schema(
//   {
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product", // Make sure the Product model is defined correctly
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     size: {
//       type: String,
//       required: true,
//     },
//     color: {
//       type: String,
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//       default: 1,
//     },
//   },
//   { _id: false } // _id: false ensures that each cart item doesn't have a unique _id
// );

// const cartSchema = new mongoose.Schema(
//   {
//     user: {     
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User", // Ensure that you have a User model created and it's correctly referenced
//       required: function (){
//         return !this.guestId;
//       }, // This is not required for guest users, but will be for logged-in users
//     },
//     guestId: {     
//       type: String,
//       required: function (){
//         return !this.userId;
//       }, // guestId is not mandatory
//     },
//     products: [cartItemSchema], // Array of cart items with the cartItemSchema structure
//     totalPrice: {
//       type: Number,      
//       required: true,
//       default: 0, // Total price, which you may need to calculate in the backend
//     },
//   },
//   { timestamps: true } // Automatically adds createdAt and updatedAt fields
// );

// module.exports = mongoose.model("Cart", cartSchema); // Export Cart model







const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
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
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: function () {
        return !this.guestId;
      },
    },
    guestId: {
      type: String,
      required: function () {
        return !this.user;
      },
    },
    products: {
      type: [cartItemSchema],
      validate: {
        validator: function (val) {
          return val.length > 0;
        },
        message: "Cart must have at least one product.",
      },
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

cartSchema.pre("save", function (next) {
  if (!this.user && !this.guestId) {
    return next(new Error("Either user or guestId must be provided."));
  }

  const object = this.products;

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = object[key];
      // Optional: do something with element
    }
  }

  next();
});

// ✅ Yeh line fix ki gayi hai:
module.exports = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

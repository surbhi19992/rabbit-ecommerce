// const express = require("express");
// const router = express.Router();
// const Cart = require("../models/cart.Model");
// const Product = require("../models/productModel");  // Import Product model

// // Helper function to get cart
// const getCart = async (userId, guestId) => {
//   return await Cart.findOne({
//     $or: [{ user: userId }, { guestId: guestId }],
//   });
// };

// // Helper function to recalculate the total price
// const recalculateTotal = (cart) => {
//   return cart.items.reduce((acc, item) => {
//     const price = Number(item.price) || 0;  // Ensure price is a number
//     const qty = Number(item.quantity) || 0;  // Ensure quantity is a number
//     return acc + (price * qty);
//   }, 0);
// };

// // POST: Add to cart
// router.post("/", async (req, res) => {
//   const { userId, guestId, productId, quantity, size, color } = req.body;

//   if (!productId || !quantity || !size || !color || (!userId && !guestId)) {
//     return res.status(400).json({ message: "Required fields missing" });
//   }

//   try {
//     const product = await Product.findById(productId);
//     if (!product) return res.status(404).json({ message: "Product not found" });

//     const newItem = {
//       productId,
//       quantity: Number(quantity), // ✅ typecast
//       size,
//       color,
//       price: Number(product.price), // ✅ typecast
//     };

//     let cart = await getCart(userId, guestId);

//     if (cart) {
//       const existingItemIndex = cart.items.findIndex(
//         (item) =>
//           item.productId.toString() === productId &&
//           item.size === size &&
//           item.color === color
//       );

//       if (existingItemIndex !== -1) {
//         cart.items[existingItemIndex].quantity += Number(quantity); // ✅ fix
//       } else {
//         cart.items.push(newItem);
//       }
//     } else {
//       cart = new Cart({
//         ...(userId ? { userId } : { guestId }),
//         items: [newItem],
//       });
//     }

//     // ✅ Recalculate totalPrice safely
//     cart.totalPrice = recalculateTotal(cart); // Using the helper function

//     await cart.save();
//     res.status(201).json({ message: "Item added to cart successfully", cart });
//   } catch (error) {
//     console.error("Error in POST /api/cart:", error);
//     res.status(500).json({ message: "Internal Server Error", error: error.message });
//   }
// });

// // PUT: Update cart item quantity
// router.put("/", async (req, res) => {
//   const { productId, quantity, size, color, guestId, userId } = req.body;

//   if (!productId || !size || !color || (!userId && !guestId)) {
//     return res.status(400).json({ message: "Required fields missing" });
//   }

//   try {
//     const cart = await getCart(userId, guestId);
//     if (!cart) return res.status(404).json({ message: "Cart not found" });

//     const itemIndex = cart.items.findIndex(
//       (item) =>
//         item.productId.toString() === productId &&
//         item.size === size &&
//         item.color === color
//     );

//     if (itemIndex === -1) {
//       return res.status(404).json({ message: "Item not found in cart" });
//     }

//     if (Number(quantity) === 0) {
//       cart.items.splice(itemIndex, 1);
//     } else {
//       cart.items[itemIndex].quantity = Number(quantity); // ✅ fix
//     }

//     cart.totalPrice = recalculateTotal(cart); // Recalculate totalPrice

//     await cart.save();
//     res.status(200).json({ message: "Cart item updated", cart });
//   } catch (error) {
//     console.error("PUT /api/cart error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });

// // DELETE: Remove item from cart
// router.delete("/", async (req, res) => {
//   const { productId, size, color, guestId, userId } = req.body;

//   // Validation of required fields
//   if (!productId || !size || !color || (!userId && !guestId)) {
//     return res.status(400).json({ message: "Required fields missing" });
//   }

//   try {
//     // Fetching the cart for either user or guest
//     const cart = await getCart(userId, guestId);
    
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     // Finding the product index in the cart
//     const productIndex = cart.items.findIndex((item) => {
//       return (
//         item.productId.toString() === productId &&
//         item.size.toLowerCase() === size.toLowerCase() &&
//         item.color.toLowerCase() === color.toLowerCase()
//       );
//     });

//     if (productIndex > -1) {
//       // Remove the product from the cart
//       const removed = cart.items.splice(productIndex, 1);
//       console.log("✅ Removed item:", removed);

//       // Recalculate the total price after removing the item
//       cart.totalPrice = recalculateTotal(cart); // Use helper function

//       // Save the updated cart
//       await cart.save();
//       return res.status(200).json({ message: "Item removed successfully", products: cart.items });
//     } else {
//       return res.status(404).json({ message: "Product not found in cart" });
//     }
//   } catch (err) {
//     console.error("💥 DELETE /api/cart error:", err.message);
//     return res.status(500).json({ message: "Server Error", error: err.message });
//   }
// });

// module.exports = router;




const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.Model");
const Product = require("../models/productModel");
const { protect } = require("../middleware/authMiddleware"); // Assuming you have auth middleware

// Helper: get cart by userId or guestId
const getCart = async (userId, guestId) => {
  return await Cart.findOne({
    $or: [{ user: userId }, { guestId: guestId }],
  });
};

// Helper: recalculate total price
const recalculateTotal = (cart) => {
  return cart.products.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return acc + price * qty;
  }, 0);
};

// GET cart
router.get("/", async (req, res) => {
  const { userId, guestId } = req.query;

  if (!userId && !guestId) {
    return res.status(400).json({ message: "userId or guestId is required" });
  }

  try {
    const cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json(cart);
  } catch (error) {
    console.error("GET /api/cart error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST: Add to cart
// POST: Add to cart
router.post("/", async (req, res) => {
  const { userId, guestId: rawGuestId, productId, quantity, size, color } = req.body;
  let guestId = rawGuestId;

  if (!userId && !guestId) {
    guestId = "guest-" + Math.random().toString(36).substring(2, 15);
    console.log("auto-generated guestId:", guestId);
  }

  if (!productId || !quantity || !size || !color || (!userId && !guestId)) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const newItem = {
      productId,
      quantity: Number(quantity),
      size,
      color,
      price: Number(product.price),
    };

    let cart = await getCart(userId, guestId);

    if (cart) {
      const existingItemIndex = cart.products.findIndex(
        (products) =>
          products.productId.toString() === productId &&
          products.size === size &&
          products.color === color
      );

      if (existingItemIndex !== -1) {
        cart.products[existingItemIndex].quantity += Number(quantity);
      } else {
        cart.products.push(newItem);
      }
    } else {
      cart = new Cart({
        ...(userId ? { user: userId } : { guestId }),
        products: [newItem],
      });
    }

    cart.totalPrice = recalculateTotal(cart);
    await cart.save();

    res.status(201).json({
      message: "Item added to cart successfully",
      cart,
      guestId: userId ? undefined : guestId,
    });

  } catch (error) {
    console.error("POST /api/cart error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// PUT: Update item quantity
router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  console.log("PUT /api/cart → userId:", userId, "guestId:", guestId);


  if (!productId || !size || !color || (!userId && !guestId)) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    const cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (product) =>
        product.productId.toString() === productId &&
        product.size === size &&
        product.color === color
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    if (Number(quantity) === 0) {
      cart.products.splice(productIndex, 1);
    } else {
      cart.products[productIndex].quantity = Number(quantity);
    }

    cart.totalPrice = recalculateTotal(cart);
    await cart.save();

    res.status(200).json({ 
      message: "Cart item updated",
       cart,
       guestId: userId ? undefined : guestId
       
       });
  } catch (error) {
    console.error("PUT /api/cart error:", error);
    
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// DELETE: Remove item
router.delete("/", async (req, res) => {
  const { productId, size, color, guestId, userId } = req.body;

  if (!productId || !size || !color || (!userId && !guestId)) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    const cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (product) =>
        product.productId.toString() === productId &&
        product.size.toLowerCase() === size.toLowerCase() &&
        product.color.toLowerCase() === color.toLowerCase()
    );

    if (productIndex !== -1) {
      cart.products.splice(productIndex, 1);
      cart.totalPrice = recalculateTotal(cart);
      await cart.save();
      return res.status(200).json({ message: "Item removed", products: cart.products });
    }

    res.status(404).json({ message: "Item not found in cart" });
  } catch (err) {
    console.error("DELETE /api/cart error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST /api/cart/merge: Merge guest cart with logged-in user cart
router.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body;

  try {
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    if (guestCart) {
      if (guestCart.products.length === 0) {
        return res.status(400).json({ message: "Guest cart is empty" });
      }

      if (userCart) {
        guestCart.products.forEach((guestItem) => {
          const index = userCart.products.findIndex(
            (product) =>
              product.productId.toString() === guestItem.productId.toString() &&
              product.size === guestItem.size &&
              product.color === guestItem.color
          );

          if (index > -1) {
            userCart.products[index].quantity += guestItem.quantity;
          } else {
            userCart.products.push(guestItem);
          }
        });

        userCart.totalPrice = recalculateTotal(userCart);
        await userCart.save();
        await Cart.deleteOne({ guestId });

        res.status(200).json(userCart);
      } else {
        guestCart.user = req.user._id;
        guestCart.guestId = undefined;
        await guestCart.save();
        res.status(200).json(guestCart);
      }
    } else {
      if (userCart) {
        return res.status(200).json(userCart);
      }
      res.status(404).json({ message: "Guest cart not found" });
    }
  } catch (error) {
    console.error("POST /api/cart/merge error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

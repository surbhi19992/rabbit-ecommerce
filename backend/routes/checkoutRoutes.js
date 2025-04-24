const express = require("express");
const router = express.Router();
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Product = require("../models/product");
const Order = require("../models/order");
const { protect } = require("../middleware/authMiddleware");

// @route POST /api/checkout
// @desc Create a new checkout session
// @access Private
router.post("/", protect, async (req, res) => {
  const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;

  console.log("🟡 Received POST /checkout body =>");
  console.log("checkoutItems:", checkoutItems);
  console.log("shippingAddress:", shippingAddress);
  console.log("paymentMethod:", paymentMethod);
  console.log("totalPrice:", totalPrice);

  if (!checkoutItems || checkoutItems.length === 0) {
    return res.status(400).json({ message: "No items in checkout" });
  }

  try {
    const newCheckout = await Checkout.create({
      user: req.user._id,
      checkoutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: "Pending",
      isPaid: false,
    });

    console.log(`Checkout created for user: ${req.user._id}`);
    res.status(201).json(newCheckout);
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


// @route PUT /api/checkout/:id/pay
// @desc Update checkout to mark as paid after successful payment
// @access Private
router.put("/:id/pay", protect, async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;

  try {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (paymentStatus === "paid") {
      checkout.isPaid = true;
      checkout.paymentStatus = paymentStatus;
      checkout.paymentDetails = paymentDetails;
      checkout.paymentMethod = paymentDetails?.paymentGateway || checkout.paymentMethod;
      checkout.paidAt = Date.now();
      await checkout.save();

      res.status(200).json(checkout);
    } else {
      res.status(400).json({ message: "Invalid Payment Status" });
    }
  } catch (error) {
    console.error("Payment update error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route POST /api/checkout/:id/finalize
// @desc Finalize checkout and convert to an order after payment confirmation
// @access Private
router.post("/:id/finalize", protect, async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);
    console.log("✅ isPaid:", checkout.isPaid);
console.log("✅ paymentStatus:", checkout.paymentStatus);
console.log("✅ isFinalized:", checkout.isFinalized);


    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (checkout.isPaid && !checkout.isFinalized) {
        console.log("Finalizing with checkoutItems:", checkout.checkoutItems);
      const finalOrder = await Order.create({
        user: checkout.user,
        orderItems: checkout.checkoutItems, // 👈 Make sure to use `checkoutItems` not `orderItems`
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        totalPrice: checkout.totalPrice,
        isPaid: true,
        paidAt: checkout.paidAt,
        isDelivered: false,
        paymentStatus: "paid",
        paymentDetails: checkout.paymentDetails,
      });

      console.log("ORDER CREATED SUCCESSFULLY:", finalOrder);

      checkout.isFinalized = true;
      checkout.isFinalizedAt = Date.now(); // Fixed typo: `finalizeve` ➝ `isFinalizedAt`
      await checkout.save();

      await Cart.findOneAndDelete({ user: checkout.user }); // Fixed: `findOneDelete` ➝ `findOneAndDelete`

      res.status(201).json(finalOrder);
    } else if (checkout.isFinalized) {
      res.status(400).json({ message: "Checkout already finalized" });
    } else {
      res.status(400).json({ message: "Checkout is not paid" });
    }
  } catch (error) {
    console.error("Finalize error:", error);
    res.status(500).json({ message: "Server Error" });
    
  }
});

module.exports = router;

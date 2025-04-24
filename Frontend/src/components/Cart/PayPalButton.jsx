
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Checkout() {
  const [showPayPal, setShowPayPal] = useState(false);
  const [error, setError] = useState(null);

  const handleSuccess = (details) => {
    console.log("Payment Successful:", details);
    alert("✅ Payment Successful!");

    console.log("showPayPal:", showPayPal);

  };

  const handleError = (err) => {
    console.error("Payment Error:", err);
    setError("❌ Payment failed! Please try again.");
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: "USD",
        components: "buttons", // ✅ Required for PayPal buttons
        "enable-funding": "card" // ✅ Enables Debit/Credit Card
      }}
    >
      <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
        <input type="text" placeholder="First Name" className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Last Name" className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Address" className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="City" className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Postal Code" className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Country" className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Phone" className="w-full mb-4 p-2 border rounded" />

        {!showPayPal ? (
          <button
            className="w-full bg-blue-500 text-white p-2 rounded-md"
            onClick={() => setShowPayPal(true)}
          >
            Continue to Payment
          </button>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mt-4">Pay with PayPal or Card</h3>
            {error && <p className="text-red-500">{error}</p>}
            <PayPalButtons
              style={{ layout: "vertical" }}
              fundingSource={undefined} // ✅ Shows all available funding sources (PayPal, Card, etc.)
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{ amount: { value: "10.00" } }],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(handleSuccess).catch(handleError);
              }}
              onError={handleError}
            />
          </div>
        )}
      </div>
    </PayPalScriptProvider>
  );
}

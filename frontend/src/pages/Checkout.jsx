import { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (!formData.name || !formData.address) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Order placed successfully!");

    clearCart();

    setFormData({
      name: "",
      address: "",
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Checkout</h1>

      <p>
        <strong>Total Amount:</strong> ₹{cartTotal}
      </p>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <textarea
        name="address"
        placeholder="Delivery Address"
        value={formData.address}
        onChange={handleChange}
        rows="4"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <button
        onClick={placeOrder}
        style={{
          background: "green",
          color: "white",
          border: "none",
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>

      {cartItems.length === 0 && (
        <p style={{ marginTop: "20px" }}>
          Your cart is empty.
        </p>
      )}
    </div>
  );
}

export default Checkout;
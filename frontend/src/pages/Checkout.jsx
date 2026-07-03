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
    setFormData({ name: "", address: "" });
  };

  return (
    <div className="page-container" style={{ maxWidth: "500px" }}>
      <h1 style={{ marginBottom: "20px", color: "#1f2937" }}>📦 Checkout</h1>

      {cartItems.length === 0 ? (
        <p style={{ fontSize: "18px" }}>Your cart is empty. Add items before checking out.</p>
      ) : (
        <>
          <div className="cart-card">
            <p style={{ fontSize: "20px", marginBottom: "0" }}>
              <strong>Total Amount:</strong>{" "}
              <span style={{ color: "#2563eb", fontWeight: "bold" }}>₹{cartTotal}</span>
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", marginBottom: "15px" }}
            />
            <textarea
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              style={{ width: "100%", marginBottom: "20px" }}
            />
            <button className="checkout-btn" onClick={placeOrder} style={{ width: "100%" }}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;